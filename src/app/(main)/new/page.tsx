import CreateForm from '@(main)/new/components/CreateForm/CreateForm';
import styles from './page.module.css';
export default function New() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Create Book</h1>
      <CreateForm />
    </main>
  );
}
