import { Field, Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useId, useState } from 'react';
import styles from './VerifyForm.module.css';

interface FormValues {
  code: string;
}

interface VerifyFormProps {
  email: string;
  onSuccess: (code: string) => void;
}

export default function VerifyForm({ email, onSuccess }: VerifyFormProps) {
  const [timer, setTimer] = useState(0);
  const codeId = useId();

  const CodeSchema = Yup.object().shape({
    code: Yup.string()
      .min(6, 'The code must contain 6 characters')
      .max(6, 'The code must contain 6 characters')
      .required('Code is required'),
  });

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleResend = async () => {
    if (timer > 0) return;
    const toastId = toast.loading('Resending code...');
    try {
      await axios.post('/api/auth/forgot-password', { email });
      toast.success('Code resent!', { id: toastId });
      setTimer(60);
    } catch (error) {
      toast.error('Failed to resend', { id: toastId });
    }
  };

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    const toastId = toast.loading('Verify code...');
    try {
      await axios.post('api/auth/verify-code', {
        email: email,
        code: values.code,
      });

      toast.success('Code verify successfully!', { id: toastId });

      setTimeout(() => {
        onSuccess(values.code);
      }, 500);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const errorMsg = err.response?.data?.error || 'Failed to verify code';
        toast.error(errorMsg, { id: toastId });
      } else {
        toast.error('Connection error', { id: toastId });
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Formik
        initialValues={{ code: '' }}
        validationSchema={CodeSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <label className={styles.label} htmlFor={codeId}>
              <span className={styles.label_span}>Code</span>
              <Field
                className={`${styles.label_field} ${
                  touched.code && errors.code ? styles.field_error : ''
                }`}
                type="text"
                name="code"
                id={codeId}
              />
              {touched.code && errors.code && (
                <span className={styles.error_message}>{errors.code}</span>
              )}
            </label>
            <button className={styles.button}>Verify</button>
            <button
              type="button"
              className={styles.resend_btn}
              onClick={handleResend}
            >
              Resend code
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
