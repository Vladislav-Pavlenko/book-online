'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import ForgotForm from './components/ForgotForm/ForgotForm';
import VerifyForm from './components/VerifyForm/VerifyForm';
import ResetForm from './components/ResetForm/ResetForm';
import styles from './page.module.css';

type Stage = 'FORGOT' | 'VERIFY' | 'RESET';

const INITIAL_DATA = {
  email: '',
  code: '',
};

export default function ForgotPassword() {
  const router = useRouter();

  const [stage, setStage] = useState<Stage>('FORGOT');
  const [formData, setFormData] = useState(INITIAL_DATA);
  const [isMounted, setIsMounted] = useState(false);

  const handleBack = () => {
    if (stage === 'RESET') {
      setStage('VERIFY');
    } else if (stage === 'VERIFY') {
      setStage('FORGOT');
    }
  };

  useEffect(() => {
    const savedData = localStorage.getItem('forgot_password_process');

    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        // eslint-disable-next-line
        setStage(parsed.stage || 'FORGOT');
        setFormData(parsed.formData || INITIAL_DATA);
      } catch (e) {
        console.error('Error parsing localStorage', e);
        localStorage.removeItem('forgot_password_process');
      }
    }

    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem(
        'forgot_password_process',
        JSON.stringify({
          stage,
          formData,
        })
      );
    }
  }, [stage, formData, isMounted]);

  const handleEmailSubmit = (email: string) => {
    setFormData((prev) => ({ ...prev, email }));
    setStage('VERIFY');
  };

  const handleCodeSubmit = (code: string) => {
    setFormData((prev) => ({ ...prev, code }));
    setStage('RESET');
  };

  const handleResetSuccess = () => {
    localStorage.removeItem('forgot_password_process');
    router.push('/login');
  };

  if (!isMounted) return null;

  const content = {
    FORGOT: {
      title: 'Forgot Password',
      desc: 'Enter the email address associated with your account to receive a password reset code.',
    },
    VERIFY: {
      title: 'Verify your code',
      desc: `Please enter the code sent to your email.`,
    },
    RESET: {
      title: 'Create new password',
      desc: 'Your new password must be different from previous used password',
    },
  };

  return (
    <main className={styles.main}>
      {stage !== 'FORGOT' ? (
        <button onClick={handleBack} className={styles.button}>
          Go back
        </button>
      ) : (
        <button onClick={() => router.push('/login')} className={styles.button}>
          Back to login
        </button>
      )}
      <div className={styles.container}>
        <h1 className={styles.title}>{content[stage].title}</h1>
        <p className={styles.description}>{content[stage].desc}</p>

        {stage === 'FORGOT' && <ForgotForm onSuccess={handleEmailSubmit} />}

        {stage === 'VERIFY' && (
          <VerifyForm email={formData.email} onSuccess={handleCodeSubmit} />
        )}

        {stage === 'RESET' && (
          <ResetForm
            email={formData.email}
            code={formData.code}
            onSuccess={handleResetSuccess}
          />
        )}
      </div>
    </main>
  );
}
