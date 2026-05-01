'use client';
import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'next/navigation';
import { ColorRing } from 'react-loader-spinner';
import Image from 'next/image';
import styles from './page.module.css';
import BookTitle from '@(main)/books/[id]/components/BookTitle/BookTitle';
import Link from 'next/link';
import BookInfo from '@(main)/books/[id]/components/BookInfo/BookInfo';
import BookDescription from '@(main)/books/[id]/components/BookDescription/BookDescription';
import BookToolbar from '@(main)/books/[id]/components/BookToolbar/BookToolbar';
import BookComments from '@(main)/books/[id]/components/BookComments/BookComments';

const emptyBook: Book = {
  id: '',
  title: '',
  description: '',
  authors: [
    {
      id: '',
      name: '',
      bio: null,
    },
  ],
  coverData: '',
  categories: [
    {
      id: '',
      name: '',
    },
  ],
  addedBy: {
    fullName: '',
  },
  averageRating: 0,
  commentsCount: 0,
};

interface Book {
  id: string;
  title: string;
  description: string;
  authors: {
    id: string;
    name: string;
    bio: string | null;
  }[];
  coverData: string;
  categories: {
    id: string;
    name: string;
  }[];
  addedBy: {
    fullName: string;
  };
  averageRating: number;
  commentsCount: number;
}

interface ApiErrorResponse {
  message: string;
}

export default function Book() {
  const params = useParams();
  const bookId = params.id;
  const [book, setBook] = useState<Book>(emptyBook);
  const [isLoading, setIsLoading] = useState(false);

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
  }, [setBook, bookId]);
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
          <Link className={styles.link} href="/home">
            <svg className={styles.link_icon} width="51" height="52">
              <use href="/img/icons.svg#arrow-right"></use>
            </svg>
            <span className={styles.link_span}>Back</span>
          </Link>
          <div className={styles.container}>
            <Image
              className={styles.img}
              src={book.coverData || '/img/book-preview.jpg'}
              alt={book.title}
              width="312"
              height="457"
            />
            <div className={styles.main_content}>
              <BookTitle
                title={book.title}
                averageRating={book.averageRating}
                commentsCount={book.commentsCount}
              />
              <BookInfo
                author={book.authors}
                genre={book.categories}
                addedBy={book.addedBy.fullName}
              />
              <BookToolbar title={book.title} bookId={bookId} />
              <BookDescription description={book.description} />
              <BookComments
                commentsCount={book.commentsCount}
                bookId={bookId}
              />
            </div>
          </div>
        </main>
      )}
    </>
  );
}
