import styles from './BookInfo.module.css';

interface BookInfoProps {
  author: {
    id: string;
    name: string;
    bio: string | null;
  }[];
  genre: {
    id: string;
    name: string;
  }[];
  addedBy: string;
  progress: {
    currentPage: number;
    totalPages: number | null;
  };
}

export default function BookInfo({
  author,
  genre,
  addedBy,
  progress,
}: BookInfoProps) {
  return (
    <ul className={styles.list}>
      <li className={styles.li}>
        <h4 className={styles.li_title}>Author</h4>
        <p className={styles.li_content}>
          {author.map((a) => a.name).join(', ')}
        </p>
      </li>
      <li className={styles.li}>
        <h4 className={styles.li_title}>Genre</h4>
        <p className={styles.li_content}>
          {genre.map((g) => g.name).join(', ')}
        </p>
      </li>
      <li className={styles.li}>
        <h4 className={styles.li_title}>Added by</h4>
        <p className={styles.li_content}>{addedBy}</p>
      </li>
      <li className={styles.li}>
        <h4 className={styles.li_title}>Progress</h4>
        <p
          className={styles.li_content}
        >{`${progress.currentPage} / ${progress.totalPages}`}</p>
      </li>
    </ul>
  );
}
