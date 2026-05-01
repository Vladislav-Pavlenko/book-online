'use client';

import { useState } from 'react';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import axios, { AxiosError } from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import styles from './Comment.module.css';
import { ParamValue } from 'next/dist/server/request/params';

interface CommentFormValues {
  text: string;
}

interface ServerErrorResponse {
  error?: string;
  message?: string;
}

interface CommentModalProps {
  bookId: ParamValue;
  onClose: () => void;
  onSuccess?: () => void;
}

export default function CommentModal({
  bookId,
  onClose,
  onSuccess,
}: CommentModalProps) {
  const [isOpen] = useState(true);

  const CommentSchema = Yup.object().shape({
    text: Yup.string()
      .min(2, 'Comment is too short')
      .max(500, 'Comment is too long')
      .required('Comment is required'),
  });

  const handleSubmit = async (
    values: CommentFormValues,
    { setSubmitting, resetForm }: FormikHelpers<CommentFormValues>
  ) => {
    const toastId = toast.loading('Sending comment...');

    try {
      await axios.post(`/api/books/${bookId}/comments`, values);

      toast.success('Comment added!', { id: toastId });
      resetForm();

      if (onSuccess) onSuccess();
      onClose();
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const axiosError = err as AxiosError<ServerErrorResponse>;
        toast.error(
          axiosError.response?.data?.error ||
            axiosError.response?.data?.message ||
            'Error',
          { id: toastId }
        );
      } else {
        toast.error('Connection failed', { id: toastId });
      }
    } finally {
      setSubmitting(false);
    }
  };

  return isOpen ? (
    <div className={styles.overlay}>
      <Toaster position="top-center" />

      <div className={styles.modal}>
        <div className={styles.header}>
          <h2 className={styles.title}>Add comment</h2>

          <button className={styles.close_btn} onClick={onClose} type="button">
            <svg className={styles.close_icon} width="28" height="28">
              <use href="/img/icons.svg#close" />
            </svg>
          </button>
        </div>

        <Formik
          initialValues={{ text: '' }}
          validationSchema={CommentSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className={styles.form}>
              <label className={styles.label}>
                <span className={styles.label_span}>Comment</span>

                <Field
                  as="textarea"
                  name="text"
                  className={`${styles.textarea} ${
                    touched.text && errors.text ? styles.error : ''
                  }`}
                  placeholder="Write your comment..."
                />

                {touched.text && errors.text && (
                  <span className={styles.error_message}>{errors.text}</span>
                )}
              </label>

              <button
                type="submit"
                className={styles.button}
                disabled={isSubmitting}
              >
                Send
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  ) : null;
}
