import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Link className={styles.logo_link} href="/home">
          <svg className={styles.logo_icon} width="60" height="60">
            <use href="/img/icons.svg#logo"></use>
          </svg>
        </Link>
        <p className={styles.description}>
          Book Online – Your Ultimate Digital Library. Discover, read, and
          organize your favorite books in one seamless platform. Dive into
          stories anytime, anywhere.
        </p>
      </div>
      <ul className={styles.list}>
        <li className={styles.li}>
          <p className={styles.list_link}>
            Copyright © 2026. LogoIpsum. All rights reserved.
          </p>
        </li>
        <li className={styles.li}>
          <p className={styles.list_link}>Terms & Conditions</p>
        </li>
        <li className={styles.li}>
          <p className={styles.list_link}>Privacy Policy</p>
        </li>
      </ul>
    </footer>
  );
}
