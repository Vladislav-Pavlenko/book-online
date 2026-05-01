import styles from './BookToolbar.module.css';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';
import clsx from 'clsx';
import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { ParamValue } from 'next/dist/server/request/params';

interface BookToolbarProps {
  title: string;
  bookId: ParamValue;
}

interface ApiErrorResponse {
  message: string;
}

export default function BookToolbar({ title, bookId }: BookToolbarProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isLike, setIsLike] = useState<boolean>(false);
  const handleShare = async () => {
    const shareUrl = window.location.href;

    if (navigator.share) {
      await navigator.share({
        title,
        url: shareUrl,
      });
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
      } catch (err) {
        toast.error('Unable to copy link. Please copy manually.');
      }
    }
  };

  const handleFavorite = async () => {
    try {
      const response = await axios.patch(`/api/books/${bookId}/favorite`);
      setIsFavorite(response.data.isFavorite);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<ApiErrorResponse>;
        const message = axiosError.response?.data?.message;

        toast.error(message || `Server error: ${axiosError.response?.status}`);
      } else {
        toast.error('Check your internet connection');
      }
    }
  };

  const handleLike = async () => {
    try {
      const response = await axios.patch(`/api/books/${bookId}/like`);
      setIsLike(response.data.isLike);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<ApiErrorResponse>;
        const message = axiosError.response?.data?.message;

        toast.error(message || `Server error: ${axiosError.response?.status}`);
      } else {
        toast.error('Check your internet connection');
      }
    }
  };

  useEffect(() => {
    async function handleFetch() {
      try {
        const responseFavorite = await axios.get(
          `/api/books/${bookId}/favorite`
        );
        setIsFavorite(responseFavorite.data.isFavorite);
        const responseLike = await axios.get(`/api/books/${bookId}/like`);
        setIsLike(responseLike.data.isLike);
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
      }
    }

    handleFetch();
  }, [bookId]);

  return (
    <div className={styles.toolbar}>
      <Toaster position="top-right" reverseOrder={false} />
      <Link className={styles.link} href={`/books/${bookId}/read`}>
        <svg className={styles.link_icon} width="30" height="30">
          <use href="/img/icons.svg#book"></use>
        </svg>
        <span className={styles.link_span}>Read</span>
      </Link>
      <ul className={styles.list}>
        <li className={styles.li}>
          <button
            className={styles.li_button}
            onClick={handleFavorite}
            type="button"
          >
            <svg
              className={clsx(
                styles.li_icon,
                isFavorite ? styles.yellow_active : styles.yellow
              )}
              width="40"
              height="40"
            >
              <use href="/img/icons.svg#save-2"></use>
            </svg>
          </button>
        </li>
        <li>
          <button
            className={styles.li_button}
            onClick={handleLike}
            type="button"
          >
            <svg
              className={clsx(
                styles.li_icon,
                isLike ? styles.red_active : styles.red
              )}
              width="40"
              height="40"
            >
              <use href="/img/icons.svg#heart"></use>
            </svg>
          </button>
        </li>
        <li>
          <button
            className={styles.li_button}
            onClick={handleShare}
            type="button"
          >
            <svg
              className={clsx(styles.li_icon, styles.blue)}
              width="40"
              height="40"
            >
              <use href="/img/icons.svg#share"></use>
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
}
