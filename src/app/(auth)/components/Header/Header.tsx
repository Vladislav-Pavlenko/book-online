import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.link} href="/home">
        <svg className={styles.link_icon} width="40" height="40">
          <use href="/img/icons.svg#logo"></use>
        </svg>
        BookOnline
      </Link>
    </header>
  );
}
