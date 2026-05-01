'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios, { AxiosError } from 'axios';
import { ParamValue } from 'next/dist/server/request/params';
import styles from './Toolbar.module.css';
import { toast, Toaster } from 'react-hot-toast';

interface ToolbarProps {
  bookId: ParamValue;
  title: string;
  onClose: () => void;
}

interface ApiErrorResponse {
  message?: string;
  error?: string;
}

export default function Toolbar({ bookId, title, onClose }: ToolbarProps) {
  const [isFavorite, setIsFavorite] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchFavorite() {
      try {
        const response = await axios.get(`/api/books/${bookId}/favorite`);
        setIsFavorite(response.data.isFavorite);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError<ApiErrorResponse>;
          const message =
            axiosError.response?.data?.message ||
            axiosError.response?.data?.error;

          toast.error(
            message || `Server error: ${axiosError.response?.status}`
          );
        } else {
          toast.error('Check your internet connection');
        }
      }
    }

    fetchFavorite();
  }, [bookId]);

  const handleToggleFavorite = async () => {
    if (loading || isFavorite === null) return;

    const prev = isFavorite;
    setIsFavorite(!prev);
    setLoading(true);

    try {
      const response = await axios.patch(`/api/books/${bookId}/favorite`);
      setIsFavorite(response.data.isFavorite);
    } catch (error) {
      setIsFavorite(prev);

      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<ApiErrorResponse>;
        const message =
          axiosError.response?.data?.message ||
          axiosError.response?.data?.error;

        toast.error(message || `Server error: ${axiosError.response?.status}`);
      } else {
        toast.error('Check your internet connection');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position={'top-center'} reverseOrder={false} />
      <div className={styles.container}>
        <Link className={styles.title_container} href={`/books/${bookId}`}>
          <svg className={styles.title_icon} width="32" height="32">
            <use href="/img/icons.svg#arrow-right"></use>
          </svg>
          <span className={styles.title}>{title}</span>
        </Link>

        <ul className={styles.list}>
          <li className={styles.li}>
            <button
              className={styles.li_button}
              type="button"
              onClick={handleToggleFavorite}
              disabled={loading || isFavorite === null}
            >
              <svg className={styles.li_icon} width="40" height="40">
                <use
                  href={`/img/icons.svg#${
                    isFavorite ? 'archive-minus' : 'archive-add'
                  }`}
                ></use>
              </svg>
            </button>
          </li>

          <li className={styles.li}>
            <button
              className={styles.li_button}
              type="button"
              onClick={onClose}
            >
              <svg className={styles.li_icon} width="40" height="40">
                <use href="/img/icons.svg#edit"></use>
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
