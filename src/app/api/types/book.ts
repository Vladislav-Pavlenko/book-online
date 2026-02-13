export interface Book {
  id: string;
  title: string;
  description?: string;
  publishedAt?: Date;

  coverData?: Uint8Array;
  fileData?: Uint8Array;

  userId?: string;

  createdAt: Date;
  updatedAt: Date;

  authors?: Author[];
  categories?: Category[];
  comments?: Comment[];
  likes?: Like[];
  favorites?: Favorite[];
  readingProgress?: ReadingProgress[];
}

export interface Author {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface Comment {
  id: string;
  userId: string;
  bookId: string;
  content: string;
  rating?: number;
  createdAt: Date;
}

export interface ReadingProgress {
  id: string;
  userId: string;
  bookId: string;
  currentPage: number;
  totalPages?: number;
  isFinished: boolean;
  updatedAt: Date;
}

export interface Like {
  userId: string;
  bookId: string;
  createdAt: Date;
}

export interface Favorite {
  userId: string;
  bookId: string;
  createdAt: Date;
}
