import styles from './BookTitle.module.css';

interface BookTitleProps {
  title: string;
  averageRating: number;
  commentsCount: number;
}

export default function BookTitle({
  title,
  averageRating,
  commentsCount,
}: BookTitleProps) {
  const fullStars = Math.floor(averageRating);
  const hasHalf = averageRating - fullStars >= 0.5;

  return (
    <div className={styles.title_container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.rating_container}>
        <p className={styles.rating}>{averageRating}</p>
        <ul className={styles.star_list}>
          {[1, 2, 3, 4, 5].map((star) => {
            let starClass = '';

            if (star <= fullStars) {
              starClass = styles.filled;
            } else if (star === fullStars + 1 && hasHalf) {
              starClass = styles.outline;
            }

            return (
              <li key={star} className={styles.star_item}>
                <svg
                  className={`${styles.star_icon} ${starClass}`}
                  width="24"
                  height="24"
                >
                  <use href="/img/icons.svg#star" />
                </svg>
              </li>
            );
          })}
        </ul>
        <p className={styles.reviews}>
          &#8226;{' '}
          {` ${commentsCount} ${commentsCount > 1 ? 'Reviews' : 'Review'}`}
        </p>
      </div>
    </div>
  );
}
