'use client';

import { useState } from 'react';
import { ReactReader } from 'react-reader';
import { ParamValue } from 'next/dist/server/request/params';
import axios from 'axios';

interface EpubReaderProps {
  bookId: string | string[] | ParamValue;
  title: string;
  currentPage: number;
}

export default function EpubReader({
  bookId,
  title,
  currentPage = 1,
}: EpubReaderProps) {
  const [location, setLocation] = useState<string | number>(currentPage);

  const bookUrl = `/api/books/${bookId}/book?ext=.epub`;

  const handleChange = async (epubcifi: string) => {
    await axios.post(`/api/books/${bookId}/progress`, {
      currentPage: location,
    });
  };

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
      <ReactReader
        url={bookUrl}
        title={title}
        location={location}
        locationChanged={(epubcifi: string) => {
          setLocation(epubcifi);
          handleChange(epubcifi);
        }}
      />
    </div>
  );
}
