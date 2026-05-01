import CreateForm from '@(main)/new/components/CreateForm/CreateForm';
import styles from './page.module.css';
import Link from 'next/link';

export default function New() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Create Book</h1>
      <p className={styles.paragraph}>
        Only .epub files are supported. Need to change your file format? <br />
        Use a free online{' '}
        <Link
          className={styles.link}
          href="https://convertio.co/epub-converter/"
          target="_blank"
        >
          converter
        </Link>
        .
      </p>
      <CreateForm />
    </main>
  );
}
