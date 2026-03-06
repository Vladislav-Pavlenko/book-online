import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { ParamValue } from 'next/dist/server/request/params';
import toast, { Toaster } from 'react-hot-toast';
import { ColorRing } from 'react-loader-spinner';
import Image from 'next/image';
import styles from './BookComments.module.css';

interface BookCommentsProps {
  commentsCount: number;
  bookId: ParamValue;
}

interface Comment {
  id: string;
  content: string;
  rating: number;
  createdAt: string;
  user: { avatarUrl: string | null; fullName: string };
}

interface ApiErrorResponse {
  message: string;
}

export default function BookComments({
  commentsCount,
  bookId,
}: BookCommentsProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const formattedDate = (date: string) =>
    new Date(date).toLocaleString('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

  const textExpand = (text: string) => {
    const isLong = text.length > 200;
    return !expanded && isLong ? text.slice(0, 395) + '...' : text;
  };

  useEffect(() => {
    async function handleFetch() {
      setIsLoading(true);
      try {
        const response = await axios.get(`/api/books/${bookId}/comments`);
        console.log(response.data.comments);
        setComments(response.data.comments);
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
  }, [bookId]);

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
        <div>
          <h3
            className={styles.title}
          >{`${commentsCount > 1 ? 'Comments' : ' Comment'} (${commentsCount})`}</h3>
          <ul className={styles.list}>
            {commentsCount ? (
              comments.map((c) => (
                <li className={styles.li} key={c.id}>
                  <div className={styles.user_container}>
                    {c.user.avatarUrl ? (
                      <Image
                        className={styles.user_image}
                        src={c.user.avatarUrl || '/img/avatar-default.svg'}
                        alt={c.user.fullName}
                        width="60"
                        height="60"
                      />
                    ) : (
                      <p className={styles.user_name}>
                        {c.user.fullName.slice(0, 1)}
                      </p>
                    )}
                    <h4 className={styles.user_fullname}>{c.user.fullName}</h4>

                    <p className={styles.created_at}>
                      {formattedDate(c.createdAt)}
                    </p>
                  </div>
                  <p className={styles.content}>
                    {textExpand(c.content)}
                    {c.content.length >= 200 && (
                      <span
                        className={styles.button}
                        onClick={() => setExpanded((prev) => !prev)}
                      >
                        {expanded ? ' Hide' : ' Read more'}
                      </span>
                    )}
                  </p>
                </li>
              ))
            ) : (
              <p className={styles.notification}>
                No comments yet. Be the first to rate this book!
              </p>
            )}
          </ul>
        </div>
      )}
    </>
  );
}
