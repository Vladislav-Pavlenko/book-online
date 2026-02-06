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
          <Link className={styles.list_link} href="">
            Copyright © 2020. LogoIpsum. All rights reserved.
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.list_link} href="">
            Terms & Conditions
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.list_link} href="">
            Privacy Policy
          </Link>
        </li>
      </ul>
    </footer>
  );
}
