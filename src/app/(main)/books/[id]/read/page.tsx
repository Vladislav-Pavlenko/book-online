'use client';
import Toolbar from '@(main)/books/[id]/read/components/ToolBar/Toolbar';
import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { ColorRing } from 'react-loader-spinner';
import { useParams } from 'next/navigation';
import styles from './page.module.css';
import dynamic from 'next/dynamic';
import EpubReader from '@(main)/books/[id]/read/components/BookReader/BookReader';
import CommentModal from '@(main)/books/[id]/read/components/Comment/Comment';

const DynamicEpubReader = dynamic(
  () => import('./components/BookReader/BookReader'),
  {
    ssr: false,
    loading: () => <p className="p-10 text-center">Ініціалізація читалки...</p>,
  }
);

const emptyBook: Book = {
  id: '',
  title: '',
  progress: {
    currentPage: 0,
    totalPages: null,
  },
};

interface Book {
  id: string;
  title: string;
  progress: {
    currentPage: number;
    totalPages: number | null;
  };
}

interface ApiErrorResponse {
  message: string;
}
export default function Read() {
  const params = useParams();
  const bookId = params.id;
  const [book, setBook] = useState<Book>(emptyBook);
  const [isLoading, setIsLoading] = useState(false);
  const [isClose, setIsClose] = useState(false);

  const onClose = () => {
    setIsClose(!isClose);
  };

  useEffect(() => {
    async function handleFetch() {
      setIsLoading(true);
      try {
        const response = await axios.get(`/api/books/${bookId}`);
        setBook(response.data.book);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError<ApiErrorResponse>;
          const message = axiosError.response?.data?.message;

          toast.error(
            message || `Server error: ${axiosError.response?.status}`
          );
        } else {
          toast.error('Check your internet connection');
        }
      } finally {
        setIsLoading(false);
      }
    }

    handleFetch();
  }, []);

  return (
    <>
      <Toaster position={'top-center'} reverseOrder={false} />
      {isLoading ? (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{ display: 'flex', margin: '0 auto' }}
          wrapperClass="color-ring-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      ) : (
        <main className={styles.main}>
          <Toolbar bookId={bookId} title={book.title} onClose={onClose} />
          <EpubReader
            bookId={bookId}
            title={book.title}
            currentPage={book.progress.currentPage}
          />
          {isClose && <CommentModal bookId={bookId} onClose={onClose} />}
        </main>
      )}
    </>
  );
}
