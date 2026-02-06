'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Sidebar.module.css';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  return (
    <>
      <aside className={clsx(styles.aside, isOpen && styles.visible)}>
        <hr className={clsx(styles.hr, isOpen && styles.visible)} />
        <Link
          className={clsx(styles.logo_link, isOpen && styles.visible)}
          href="/home"
        >
          <svg className={styles.logo_icon} width="60" height="60">
            <use href="/img/icons.svg#logo"></use>
          </svg>
        </Link>

        <button
          className={clsx(styles.lang_btn, isOpen && styles.visible)}
          type="button"
        >
          EN
          <Image
            className={styles.lang_image}
            src="/img/english.png"
            alt="English"
            width="25"
            height="16"
          />
        </button>

        <nav className={clsx(styles.nav, isOpen && styles.visible)}>
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
      <button
        className={styles.aside_btn}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className={clsx(styles.aside_btn_icon, isOpen && styles.rotate)}
          width="35"
          height="35"
        >
          <use href="/img/icons.svg#arrow-right"></use>
        </svg>
      </button>
    </>
  );
}
