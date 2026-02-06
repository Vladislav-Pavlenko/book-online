import { useId } from 'react';
import styles from './Header.module.css';
import Image from 'next/image';

export default function Header() {
  const fieldId = useId();
  const name = 'Vladyslav Pavlenko';
  const link = '';
  return (
    <header className={styles.header}>
      <label className={styles.search_label} htmlFor={fieldId}>
        <svg className={styles.search_icon} width="30" height="30">
          <use href="/img/icons.svg#search"></use>
        </svg>
        <input
          className={styles.search_input}
          type="text"
          name="search"
          id={fieldId}
          placeholder="Search book, name, author..."
        />
      </label>

      <button className={styles.lang_btn} type="button">
        EN
        <Image
          className={styles.lang_image}
          src="/img/english.png"
          alt="English"
          width="25"
          height="16"
        />
      </button>
      <div className={styles.user_container}>
        {link ? (
          <Image
            className={styles.user_image}
            src={link}
            alt={name}
            width="60"
            height="60"
          />
        ) : (
          <p className={styles.user_name}>{name.slice(0, 1)}</p>
        )}
        <p className={styles.user_fullname}>{name}</p>
      </div>

      <button className={styles.notifications_btn} type="button">
        <svg className={styles.notification_icon} width="40" height="42">
          <use href="/img/icons.svg#bell"></use>
        </svg>
      </button>
    </header>
  );
}
