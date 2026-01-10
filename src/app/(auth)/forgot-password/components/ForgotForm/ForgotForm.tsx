import { Formik, Form, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useId } from 'react';
import { EMAIL_REGEX } from 'valibot';
import styles from './ForgotForm.module.css';

interface FormValues {
  email: string;
}

interface ForgotFormProps {
  onSuccess: (email: string) => void;
}
export default function ForgotForm({ onSuccess }: ForgotFormProps) {
  const emailId = useId();

  const EmailSchema = Yup.object().shape({
    email: Yup.string()
      .matches(EMAIL_REGEX, {
        message: 'Invalid email address (e.g. user@example.com)',
      })
      .required('Email is required'),
  });

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    const toastId = toast.loading('Sending code...');
    try {
      await axios.post('api/auth/forgot-password', { email: values.email });

      toast.success('Code sent successfully!', { id: toastId });

      setTimeout(() => {
        onSuccess(values.email);
      }, 500);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const errorMsg = err.response?.data?.error || 'Failed to send code';
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
        initialValues={{ email: '' }}
        validationSchema={EmailSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <label className={styles.label} htmlFor={emailId}>
              <span className={styles.label_span}>Email</span>
              <Field
                className={`${styles.label_field} ${
                  touched.email && errors.email ? styles.field_error : ''
                }`}
                type="email"
                name="email"
                id={emailId}
              />
              {touched.email && errors.email && (
                <span className={styles.error_message}>{errors.email}</span>
              )}
            </label>
            <button className={styles.button}>Send code</button>
          </Form>
        )}
      </Formik>
    </>
  );
}
