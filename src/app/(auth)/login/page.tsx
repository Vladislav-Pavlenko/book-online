import styles from './page.module.css';
import LoginForm from '@(auth)/login/components/LoginForm/LoginForm';

export default function Login() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Log in</h1>
        <LoginForm />
      </div>
    </main>
  );
}
