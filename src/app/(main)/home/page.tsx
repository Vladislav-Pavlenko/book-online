import styles from './page.module.css';
import BookList from '@(main)/home/components/BookList/BookList';
export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Home</h1>
      <ul className={styles.list_container}>
        <li>
          <BookList title="latest" content="latest" />
        </li>
        <li>
          <BookList title="Recommended books" content="recommended" />
        </li>
        <li>
          <BookList title="Highly rated books" content="rated" />
        </li>
        <li>
          <BookList title="Favorite books" content="favorite" />
        </li>
      </ul>
    </main>
  );
}
