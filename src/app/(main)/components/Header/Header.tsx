'use client';

import { useEffect, useId, useState, useRef } from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import axios, { AxiosError } from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { ColorRing } from 'react-loader-spinner';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface User {
  fullName: string;
  avatarUrl: string;
}

interface Author {
  id: string;
  name: string;
}

interface Book {
  id: string;
  title: string;
  description?: string;
  authors: Author[];
  coverData?: string | null;
}

interface ApiErrorResponse {
  message: string;
}

export default function Header() {
  const fieldId = useId();
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const [user, setUser] = useState<User>();
  const [isInitialLoading, setIsInitialLoading] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [books, setBooks] = useState<Book[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleUnauthorized = async () => {
    try {
      await axios.post('/api/auth/logout');
    } catch (e) {}

    setUser(undefined);
    router.push('/login');
    router.refresh();
  };

  const handleLogout = async () => {
    const toastId = toast.loading('Logging out...');

    try {
      await axios.post('/api/auth/logout');

      toast.success('Logged out!', { id: toastId });

      setUser(undefined);

      router.push('/login');
      router.refresh();
    } catch (error) {
      toast.error('Logout failed', { id: toastId });
    }
  };

  useEffect(() => {
    async function fetchUser() {
      setIsInitialLoading(true);
      try {
        const response = await axios.get(`/api/user/me/header`);
        setUser(response.data.user);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 401) {
            await handleUnauthorized();
            return;
          }

          const axiosError = error as AxiosError<ApiErrorResponse>;
          const message = axiosError.response?.data?.message;

          toast.error(
            message || `Server error: ${axiosError.response?.status}`
          );
        } else {
          toast.error('Check your internet connection');
        }
      } finally {
        setIsInitialLoading(false);
      }
    }
    fetchUser();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    async function searchBooks() {
      if (!debouncedQuery.trim()) {
        setBooks([]);
        setIsDropdownOpen(false);
        return;
      }

      setIsSearching(true);
      setIsDropdownOpen(true);

      try {
        const response = await axios.get(
          `/api/books?q=${debouncedQuery}&pageSize=5`
        );
        setBooks(response.data.books || []);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 401) {
            await handleUnauthorized();
            return;
          }
        }
        console.error('Search error:', error);
      } finally {
        setIsSearching(false);
      }
    }

    searchBooks();
  }, [debouncedQuery]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      {isInitialLoading ? (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{ display: 'flex', margin: '0 auto' }}
          wrapperClass="color-ring-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      ) : (
        <header className={styles.header}>
          <div
            className={styles.search_wrapper}
            ref={searchContainerRef}
            style={{ position: 'relative' }}
          >
            <label className={styles.search_label} htmlFor={fieldId}>
              <svg className={styles.search_icon} width="30" height="30">
                <use href="/img/icons.svg#search"></use>
              </svg>
              <input
                className={styles.search_input}
                type="text"
                name="search"
                id={fieldId}
                placeholder="Search book, name, author..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => {
                  if (searchQuery.trim()) setIsDropdownOpen(true);
                }}
                autoComplete="off"
              />
            </label>

            {isDropdownOpen && searchQuery.trim() && (
              <div className={styles.search_dropdown}>
                {isSearching ? (
                  <div className={styles.dropdown_message}>Searching...</div>
                ) : books.length > 0 ? (
                  <ul className={styles.dropdown_list}>
                    {books.map((b) => (
                      <li key={b.id} className={styles.dropdown_item}>
                        <Link
                          href={`/books/${b.id}`}
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <div className={styles.book_result}>
                            {b.coverData ? (
                              <img
                                src={b.coverData}
                                alt={b.title}
                                className={styles.book_mini_cover}
                              />
                            ) : (
                              <div className={styles.book_cover_placeholder}>
                                📄
                              </div>
                            )}
                            <div className={styles.book_info}>
                              <p className={styles.book_title}>{b.title}</p>
                              <p className={styles.book_author}>
                                {b.authors.map((a) => a.name).join(', ')}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className={styles.dropdown_message}>No books found</div>
                )}
              </div>
            )}
          </div>

          <button
            className={styles.logout_btn}
            type="button"
            onClick={handleLogout}
          >
            Log Out
          </button>

          <div className={styles.user_container}>
            {user?.avatarUrl ? (
              <Image
                className={styles.user_image}
                src={user.avatarUrl}
                alt={user.fullName || 'User'}
                width="60"
                height="60"
              />
            ) : (
              <p className={styles.user_name}>
                {user?.fullName?.slice(0, 1) || 'U'}
              </p>
            )}
            <p className={styles.user_fullname}>{user?.fullName}</p>
          </div>
        </header>
      )}
    </>
  );
}
