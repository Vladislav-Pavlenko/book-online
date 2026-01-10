import { Formik, Form, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useId, useState } from 'react';
import styles from './ResetForm.module.css';

interface FormValues {
  password: string;
  confirmPassword: string;
}

interface ResetFormProps {
  email: string;
  code: string;
  onSuccess: () => void;
}

export default function ResetForm({ email, code, onSuccess }: ResetFormProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const fieldId = {
    password: useId(),
    confirmPassword: useId(),
  };

  const PasswordSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .max(16, 'Password must be at most 16 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Password must match')
      .required('Confirm password is required'),
  });

  const handleChangePassword = () => setShowPassword(!showPassword);
  const handleChangeConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    const toastId = toast.loading('Reset password...');
    try {
      await axios.post('api/auth/reset-password', {
        email: email,
        code: code,
        password: values.password,
      });

      toast.success('Password reset successful!', { id: toastId });

      setTimeout(() => {
        onSuccess();
      }, 500);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const errorMsg =
          err.response?.data?.error || 'Failed to reset password';
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
        initialValues={{ password: '', confirmPassword: '' }}
        validationSchema={PasswordSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
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
            <button className={styles.button}>Send code</button>
          </Form>
        )}
      </Formik>
    </>
  );
}
