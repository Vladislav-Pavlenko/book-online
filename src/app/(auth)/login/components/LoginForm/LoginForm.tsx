'use client';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import { useId } from 'react';
import Link from 'next/link';
import styles from './LoginForm.module.css';
import * as Yup from 'yup';
import { EMAIL_REGEX } from 'valibot';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import axios, { AxiosError } from 'axios';

interface LoginFormValues {
  email: string;
  password: string;
  signedIn: boolean;
}

interface ServerErrorResponse {
  error?: string;
  errors?: unknown[];
  message?: string;
}

export default function LoginForm() {
  const router = useRouter();
  const UserSchema = Yup.object().shape({
    email: Yup.string()
      .matches(EMAIL_REGEX, {
        message: 'Invalid email address (e.g. user@example.com)',
      })
      .required('Email address is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .max(16, 'Password must be at most 16 characters')
      .required('Password is required'),
  });

  const fieldId = {
    email: useId(),
    password: useId(),
    signedIn: useId(),
  };

  const handleSubmit = async (
    values: LoginFormValues,
    { setSubmitting }: FormikHelpers<LoginFormValues>
  ) => {
    const toastId = toast.loading('Logging in...');
    try {
      await axios.post('/api/auth/login', values);

      toast.success('Login successful!', { id: toastId });

      setTimeout(() => {
        router.push('/');
        router.refresh();
      }, 1000);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const axiosError = err as AxiosError<ServerErrorResponse>;
        const data = axiosError.response?.data;

        if (data?.error) {
          toast.error(data.error, { id: toastId });
        } else if (data?.errors && Array.isArray(data?.errors)) {
          toast.error('Validation error', { id: toastId });
        } else {
          toast.error(`Error: ${axiosError.response?.status}`, { id: toastId });
        }
      } else {
        toast.error('Connection failed', { id: toastId });
      }
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Formik
        initialValues={{ email: '', password: '', signedIn: false }}
        validationSchema={UserSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <label className={styles.label} htmlFor={fieldId.email}>
              <span className={styles.label_span}>Email</span>
              <Field
                className={`${styles.label_field} ${
                  touched.email && errors.email ? styles.field_error : ''
                }`}
                type="email"
                name="email"
                id={fieldId.email}
              />
              {touched.email && errors.email && (
                <span className={styles.error_message}>{errors.email}</span>
              )}
            </label>
            <label className={styles.label} htmlFor={fieldId.password}>
              <span className={styles.label_span}>Password</span>
              <Field
                className={`${styles.label_field} ${
                  touched.password && errors.password ? styles.field_error : ''
                }`}
                type="password"
                name="password"
                id={fieldId.password}
                suppressHydrationWarning={true}
              />
              {touched.password && errors.password && (
                <span className={styles.error_message}>{errors.password}</span>
              )}
            </label>

            <div className={styles.container}>
              <label
                className={styles.label_checkbox}
                htmlFor={fieldId.signedIn}
              >
                <Field
                  className="form-checkbox w-5 h-5 border-2 border-[#181821] rounded-[5px] text-[#181821] focus:ring-0
    focus:ring-offset-0 focus:outline-none cursor-pointer transition max-[425px]:bg-[#fff]"
                  type="checkbox"
                  name="signedIn"
                  id={fieldId.signedIn}
                />
                <span className={styles.label_checkbox_span}>
                  Stay signed in
                </span>
              </label>
              <Link className={styles.forgot_link} href="/forgot-password">
                Forgot password?
              </Link>
            </div>

            <button className={styles.button} type="submit">
              Login
            </button>
            <p className={styles.paragraph}>
              Need an account?{' '}
              <Link className={styles.register_link} href="/register">
                Create one
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </>
  );
}
