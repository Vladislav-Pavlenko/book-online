export interface Book {
  id: string
  title: string
  description?: string
  coverUrl?: string
  publishedAt?: Date
  producerId?: string
  producerName?: string
  fileData?: Uint8Array
  createdAt: Date
  updatedAt: Date

  authors?: Author[]
  categories?: Category[]
  comments?: Comment[]
  likes?: Like[]
  favorites?: Favorite[]
  readingProgress?: ReadingProgress[]
}

export interface BookUpdate {
  id: string
  title?: string
  description?: string
  coverUrl?: string
  publishedAt?: Date
  producerId?: string
  producerName?: string
  fileData?: Uint8Array
  createdAt?: Date
  updatedAt?: Date

  authors?: Author[]
  categories?: Category[]
  comments?: Comment[]
  likes?: Like[]
  favorites?: Favorite[]
  readingProgress?: ReadingProgress[]
}

export interface Author {
  id: string
  name: string
}

export interface Category {
  id: string
  name: string
}

export interface Comment {
  id: string
  userId: string
  content: string
  stars: number
  createdAt: Date
}

export interface ReadingProgress {
  id: string
  userId: string
  bookId: string
  currentPage: number
  totalPages?: number
  updatedAt: Date
}

export interface Like {
  id: string
  userId: string
  bookId: string
}

export interface Favorite {
  id: string
  userId: string
  bookId: string
}
