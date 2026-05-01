'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { ColorRing } from 'react-loader-spinner';
import Link from 'next/link';
import styles from './page.module.css';

interface Author {
  id: string;
  name: string;
}

interface HistoryItem {
  id: string;
  bookId: string;
  title: string;
  authors: Author[];
  genres: string[];
  addedBy: string;
  coverData: string | null;
  updatedAt: string;
}

export default function History() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchHistory() {
      try {
        const response = await axios.get('/api/user/me/history');
        setHistory(response.data.history);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const message =
            error.response?.data?.message || 'Failed to load history';
          toast.error(message);
        } else {
          toast.error('Check your internet connection');
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchHistory();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  const handleDelete = (id: string) => {
    setHistory((prev) => prev.filter((item) => item.id !== id));
    toast.success('Removed from history');
  };

  return (
    <div className={styles.container}>
      <Toaster position="top-center" />

      <h1 className={styles.title}>HISTORY</h1>

      {isLoading ? (
        <ColorRing
          visible={true}
          height="100"
          width="100"
          ariaLabel="color-ring-loading"
          wrapperStyle={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '100px',
          }}
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      ) : history.length > 0 ? (
        <div className={styles.list}>
          {history.map((item) => (
            <div key={item.id} className={styles.list_item}>
              <Link
                href={`/books/${item.bookId}`}
                className={styles.cover_link}
              >
                {item.coverData ? (
                  <img
                    src={item.coverData}
                    alt={item.title}
                    className={styles.cover}
                  />
                ) : (
                  <div className={styles.placeholder}>📄</div>
                )}
              </Link>

              <div className={styles.info_section}>
                <Link
                  href={`/books/${item.bookId}`}
                  className={styles.book_title}
                >
                  {item.title}
                </Link>

                <div className={styles.meta_grid}>
                  <div className={styles.meta_item}>
                    <span className={styles.meta_label}>Author</span>
                    <span className={styles.meta_value}>
                      {item.authors[0]?.name || 'Unknown'}
                    </span>
                  </div>

                  {/* Жанр */}
                  <div className={styles.meta_item}>
                    <span className={styles.meta_label}>Genre</span>
                    <span className={styles.meta_value}>
                      {item.genres.length > 0
                        ? item.genres.join(', ')
                        : 'Not specified'}
                    </span>
                  </div>

                  {/* Хто додав */}
                  <div className={styles.meta_item}>
                    <span className={styles.meta_label}>Added By</span>
                    <span className={styles.meta_value}>{item.addedBy}</span>
                  </div>
                </div>

                <div className={styles.actions}>
                  <Link
                    href={`/books/${item.bookId}`}
                    className={styles.read_btn}
                  >
                    Read
                  </Link>
                  <span className={styles.timestamp}>
                    Saved: {formatDate(item.updatedAt)}
                  </span>
                </div>
              </div>

              <button
                className={styles.delete_btn}
                onClick={() => handleDelete(item.id)}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className={styles.empty}>Your history is empty.</p>
      )}
    </div>
  );
}
