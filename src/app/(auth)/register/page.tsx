import styles from './page.module.css';
import RegisterForm from '@(auth)/register/components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Registration</h1>
        <p className={styles.description}>Come on and create an account</p>
        <RegisterForm />
      </div>
    </main>
  );
}
