'use client';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import axios, { AxiosError } from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useId, useState } from 'react';
import { EMAIL_REGEX } from 'valibot';
import styles from './RegisterForm.module.css';

interface RegisterFormValues {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface ApiErrorResponse {
  message: string;
}

export default function RegisterForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const handleChangePassword = () => setShowPassword(!showPassword);

  const handleChangeConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const fieldId = {
    fullName: useId(),
    email: useId(),
    password: useId(),
    confirmPassword: useId(),
  };

  const UserSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(3, 'Full name must be at least 3 character')
      .max(30, 'Full name must be at most 30 characters')
      .required('Full name is required'),
    email: Yup.string()
      .matches(EMAIL_REGEX, {
        message: 'Invalid email address (e.g. user@example.com)',
      })
      .required('Email address is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .max(16, 'Password must be at most 16 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Password must match')
      .required('Confirm password is required'),
  });

  const handleSubmit = async (
    values: RegisterFormValues,
    { setSubmitting }: FormikHelpers<RegisterFormValues>
  ) => {
    const toastId = toast.loading('Creating account...');
    try {
      await axios.post('/api/auth/register', values);
      toast.success('Account created! Redirecting...', { id: toastId });

      setTimeout(() => {
        router.push('/login');
      }, 1000);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<ApiErrorResponse>;
        const message = axiosError.response?.data?.message;

        toast.error(message || `Server error: ${axiosError.response?.status}`, {
          id: toastId,
        });
      } else {
        toast.error('Check your internet connection', { id: toastId });
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={UserSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <label className={styles.label} htmlFor={fieldId.fullName}>
              <span className={styles.label_span}>Full name</span>

              <Field
                className={`${styles.label_field} ${
                  touched.fullName && errors.fullName ? styles.field_error : ''
                }`}
                type="text"
                name="fullName"
                id={fieldId.fullName}
              />

              {touched.fullName && errors.fullName && (
                <span className={styles.error_message}>{errors.fullName}</span>
              )}
            </label>
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
                } ${styles.label_field_pwd}`}
                type={showPassword ? 'text' : 'password'}
                name="password"
                id={fieldId.password}
              />
              <button
                type="button"
                className={styles.password_btn}
                onClick={handleChangePassword}
              >
                {showPassword ? (
                  <svg className={styles.password_icon} width="30" height="30">
                    <use href="/img/icons.svg#eye"></use>
                  </svg>
                ) : (
                  <svg className={styles.password_icon} width="30" height="30">
                    <use href="/img/icons.svg#eye-hide"></use>
                  </svg>
                )}
              </button>
              {touched.password && errors.password && (
                <span className={styles.error_message}>{errors.password}</span>
              )}
            </label>
            <label className={styles.label} htmlFor={fieldId.confirmPassword}>
              <span className={styles.label_span}>Confirm password</span>
              <Field
                className={`${styles.label_field} ${
                  touched.confirmPassword && errors.confirmPassword
                    ? styles.field_error
                    : ''
                } ${styles.label_field_pwd}`}
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                id={fieldId.confirmPassword}
              />
              <button
                type="button"
                className={styles.password_btn}
                onClick={handleChangeConfirmPassword}
              >
                {showConfirmPassword ? (
                  <svg className={styles.password_icon} width="30" height="30">
                    <use href="/img/icons.svg#eye"></use>
                  </svg>
                ) : (
                  <svg className={styles.password_icon} width="30" height="30">
                    <use href="/img/icons.svg#eye-hide"></use>
                  </svg>
                )}
              </button>
              {touched.confirmPassword && errors.confirmPassword && (
                <span className={styles.error_message}>
                  {errors.confirmPassword}
                </span>
              )}
            </label>
            <button className={styles.button} type="submit">
              Sign up
            </button>
            <p className={styles.paragraph}>
              Already have an account?{' '}
              <Link className={styles.login_link} href="/login">
                Log in
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </>
  );
}
