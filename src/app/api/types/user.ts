import type { Book, Comment, Like, Favorite } from './book';

export type Gender = 'male' | 'female' | 'other';

export interface User {
  id: string;
  fullName: string;
  email: string;
  password: string;
  gender?: Gender;
  birthDate?: Date;
  createdAt: Date;
  updatedAt: Date;

  comments?: Comment[];
  likes?: Like[];
  favorites?: Favorite[];
  addedBooks?: Book[];
}
