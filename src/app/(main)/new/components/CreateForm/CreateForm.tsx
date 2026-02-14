'use client';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { useId, useRef } from 'react';
import * as Yup from 'yup';
import styles from './CreateForm.module.css';
import toast, { Toaster } from 'react-hot-toast';
import axios, { AxiosError } from 'axios';

const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
const nameRegex = /^[A-Za-zА-Яа-яЇїІіЄєҐґ\s\-’'ʼ]+$/;

interface BookFormValues {
  title: string;
  description: string;
  author: string;
  category: string;
  publishedAt: string;
  coverImg: File | null;
  bookFile: File | null;
}

export default function CreateForm() {
  const coverRef = useRef<HTMLInputElement | null>(null);
  const bookRef = useRef<HTMLInputElement | null>(null);

  const BookSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Title must be at least 2 character')
      .max(100, 'Title must be at most 100 characters')
      .required('Title is required'),
    description: Yup.string()
      .min(10, 'Description must be at least 10 character')
      .max(1000, 'Description must be at most 1000 characters')
      .optional(),
    author: Yup.string()
      .min(2, 'Author must be at least 2 character')
      .max(50, 'Author must be at most 50 characters')
      .matches(
        nameRegex,
        'Author can only contain letters, spaces, and hyphens'
      )
      .required('Author is required'),
    category: Yup.string()
      .min(2, 'Category must be at least 2 character')
      .max(50, 'Category must be at most 50 characters')
      .matches(
        nameRegex,
        'Category can only contain letters, spaces, and hyphens'
      )
      .required('Category is required'),
    publishedAt: Yup.string()
      .matches(dateRegex, 'Date must be in format "dd.mm.yyyy"')
      .optional(),
    coverImg: Yup.mixed<File>()
      .nullable()
      .test(
        'fileRequired',
        'Cover is required',
        (value) => value instanceof File
      ),
    bookFile: Yup.mixed<File>()
      .nullable()
      .test(
        'fileRequired',
        'Book file is required',
        (value) => value instanceof File
      ),
  });

  const fieldId = {
    title: useId(),
    description: useId(),
    author: useId(),
    category: useId(),
    publishedAt: useId(),
    coverImg: useId(),
    bookFile: useId(),
  };

  interface ApiErrorResponse {
    message: string;
  }

  const handleSubmit = async (
    values: BookFormValues,
    { setSubmitting, resetForm }: FormikHelpers<BookFormValues>
  ) => {
    const toastId = toast.loading('Creating book...');
    try {
      const formData = new FormData();

      formData.append('title', values.title);
      if (values.description)
        formData.append('description', values.description);
      formData.append('author', values.author);
      formData.append('category', values.category);
      if (values.publishedAt)
        formData.append('publishedAt', values.publishedAt);
      if (values.coverImg) formData.append('cover', values.coverImg);
      if (values.bookFile) formData.append('file', values.bookFile);

      await axios.post('/api/books', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      toast.success('Book created successfully', { id: toastId });
      resetForm();
      if (coverRef.current) coverRef.current.value = '';
      if (bookRef.current) bookRef.current.value = '';
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
          title: '',
          description: '',
          author: '',
          category: '',
          publishedAt: '',
          coverImg: null as File | null,
          bookFile: null as File | null,
        }}
        onSubmit={handleSubmit}
        validationSchema={BookSchema}
      >
        {({ setFieldValue, errors, touched }) => (
          <Form className={styles.form}>
            <label className={styles.label} htmlFor={fieldId.title}>
              <span className={styles.label_span}>Title</span>
              <Field
                className={`${styles.label_field} ${
                  touched.title && errors.title ? styles.field_error : ''
                }`}
                type="text"
                name="title"
                id={fieldId.title}
              />
              {touched.title && errors.title && (
                <span className={styles.error_message}>{errors.title}</span>
              )}
            </label>
            <label className={styles.label} htmlFor={fieldId.description}>
              <span className={styles.label_span}>Description</span>
              <Field
                className={`${styles.label_textarea} ${
                  touched.description && errors.description
                    ? styles.field_error
                    : ''
                }`}
                as="textarea"
                name="description"
                id={fieldId.description}
              />
              {touched.description && errors.description && (
                <span className={styles.error_message}>
                  {errors.description}
                </span>
              )}
            </label>
            <label className={styles.label} htmlFor={fieldId.author}>
              <span className={styles.label_span}>Author</span>
              <Field
                className={`${styles.label_field} ${
                  touched.author && errors.author ? styles.field_error : ''
                }`}
                type="text"
                name="author"
                id={fieldId.author}
              />
              {touched.author && errors.author && (
                <span className={styles.error_message}>{errors.author}</span>
              )}
            </label>
            <label className={styles.label} htmlFor={fieldId.category}>
              <span className={styles.label_span}>Category</span>
              <Field
                className={`${styles.label_field} ${
                  touched.category && errors.category ? styles.field_error : ''
                }`}
                type="text"
                name="category"
                id={fieldId.category}
              />
              {touched.category && errors.category && (
                <span className={styles.error_message}>{errors.category}</span>
              )}
            </label>
            <label className={styles.label} htmlFor={fieldId.publishedAt}>
              <span className={styles.label_span}>Published at</span>
              <Field
                className={`${styles.label_field} ${
                  touched.publishedAt && errors.publishedAt
                    ? styles.field_error
                    : ''
                }`}
                type="text"
                name="publishedAt"
                id={fieldId.publishedAt}
              />
              {touched.publishedAt && errors.publishedAt && (
                <span className={styles.error_message}>
                  {errors.publishedAt}
                </span>
              )}
            </label>
            {/**Cover image**/}
            <label className={styles.label} htmlFor={fieldId.coverImg}>
              <span className={styles.label_span}>Cover</span>
              <input
                className={`${styles.label_input} ${
                  touched.coverImg && errors.coverImg ? styles.field_error : ''
                }`}
                ref={coverRef}
                type="file"
                name="coverImg"
                id={fieldId.coverImg}
                accept="image/*"
                onChange={(event) => {
                  const file = event.currentTarget.files?.[0] || null;
                  setFieldValue('coverImg', file);
                }}
              />
              {touched.coverImg && errors.coverImg && (
                <span className={styles.error_message}>{errors.coverImg}</span>
              )}
            </label>
            {/**Book file**/}
            <label className={styles.label} htmlFor={fieldId.bookFile}>
              <span className={styles.label_span}>Book</span>
              <input
                className={`${styles.label_input} ${
                  touched.bookFile && errors.bookFile ? styles.field_error : ''
                }`}
                ref={bookRef}
                type="file"
                name="bookFile"
                id={fieldId.bookFile}
                accept=".pdf,.epub"
                onChange={(event) => {
                  const file = event.currentTarget.files?.[0] || null;
                  setFieldValue('bookFile', file);
                }}
              />
              {touched.bookFile && errors.bookFile && (
                <span className={styles.error_message}>{errors.bookFile}</span>
              )}
            </label>

            <button className={styles.button} type="submit">
              Create book
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
