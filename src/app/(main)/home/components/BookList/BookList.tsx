'use client';
import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Image from 'next/image';
import styles from './BookList.module.css';
import Link from 'next/link';
import { ColorRing } from 'react-loader-spinner';
import clsx from 'clsx';

interface BookListProps {
  title: string;
  content: string;
}

interface Book {
  id: string;
  title: string;
  authors: {
    id: string;
    name: string;
    bio: string | null;
  }[];
  coverData: string;
}

interface ApiErrorResponse {
  message: string;
}

export default function BookList({ title, content }: BookListProps) {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [viewAll, setViewAll] = useState(false);

  async function handleFetch(all: boolean = false) {
    setIsLoading(true);
    try {
      const urls: Record<string, string> = {
        latest: '/api/books?',
        recommended: '/api/books?filter=recommended',
        rated: '/api/books?filter=rated',
        favorite: '/api/books?filter=favorite',
      };

      const baseUrl = urls[content] || '/api/books';
      const url = all ? `${baseUrl}&pageSize=1000` : baseUrl;
      const response = await axios.get(url);

      setBooks(response.data.books);
      if (all) setViewAll(true);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<ApiErrorResponse>;
        const message = axiosError.response?.data?.message;

        toast.error(message || `Server error: ${axiosError.response?.status}`);
      } else {
        toast.error('Check your internet connection');
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    handleFetch();
  }, [content]);

  return (
    <div className={styles.list}>
      <Toaster position={'top-center'} reverseOrder={false} />
      <div className={styles.title_container}>
        <h3 className={styles.title}>{title} </h3>
        <button
          className={styles.title_btn}
          type="button"
          onClick={() => {
            if (!viewAll) {
              handleFetch(true);
            } else {
              handleFetch();
              setViewAll(false);
            }
          }}
        >
          (
          <span className={styles.title_btn_span}>
            {!viewAll ? 'view all' : 'view less '}
          </span>
          )
        </button>
      </div>
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
        <ul className={clsx(styles.ul, viewAll && styles.ul_all)}>
          {books.map((book) => (
            <li className={styles.li} key={book.id}>
              <Link className={styles.link} href={`/books/${book.id}`}>
                <Image
                  className={styles.li_img}
                  src={book.coverData}
                  alt={book.title}
                  width="219"
                  height="321"
                />
                <h4 className={styles.li_title}>{book.title}</h4>
                <p className={styles.li_author}>
                  {book.authors.map((a) => a.name).join(', ')}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
