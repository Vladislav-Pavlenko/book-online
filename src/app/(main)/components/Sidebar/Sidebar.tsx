'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Sidebar.module.css';
import clsx from 'clsx';

export default function Sidebar() {
  const pathName = usePathname();
  return (
    <aside className={styles.aside}>
      <Link className={styles.link} href="/home">
        <svg className={styles.link_icon} width="60" height="60">
          <use href="/img/icons.svg#logo"></use>
        </svg>
      </Link>

      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          <li className={styles.nav_li}>
            <Link
              className={clsx(
                styles.nav_link,
                pathName === '/home' && styles.active
              )}
              href="/home"
            >
              <svg className={styles.nav_icon} width="40" height="40">
                <use href="/img/icons.svg#house"></use>
              </svg>
            </Link>
          </li>
          <li className={styles.nav_li}>
            <Link
              className={clsx(
                styles.nav_link,
                pathName === '/history' && styles.active
              )}
              href="/history"
            >
              <svg className={styles.nav_icon} width="40" height="40">
                <use href="/img/icons.svg#history"></use>
              </svg>
            </Link>
          </li>
          <li className={styles.nav_li}>
            <Link
              className={clsx(
                styles.nav_link,
                pathName === '/saves' && styles.active
              )}
              href="/saves"
            >
              <svg className={styles.nav_icon} width="40" height="40">
                <use href="/img/icons.svg#save-1"></use>
              </svg>
            </Link>
          </li>
          <li className={styles.nav_li}>
            <Link
              className={clsx(
                styles.nav_link,
                pathName === '/settings' && styles.active
              )}
              href="/settings"
            >
              <svg className={styles.nav_icon} width="40" height="40">
                <use href="/img/icons.svg#setting"></use>
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
