import Link from 'next/link';
import Image from 'next/image';
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

      <button className={styles.btn} type="button">
        EN
        <Image
          className={styles.image}
          src="/img/english.png"
          alt="English"
          width="25"
          height="16"
        />
      </button>
    </header>
  );
}
