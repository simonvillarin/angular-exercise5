import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  books: Book[] = [
    {
      id: 1,
      title: 'The Nightingale',
      authors: ['Kristin Hannah', 'Megan Abbott'],
      isbn: '9780312577223',
    },
    {
      id: 2,
      title: 'The Da Vinci Code',
      authors: ['Dan Brown'],
      isbn: '9780307474278',
    },
    {
      id: 3,
      title: 'American Gods',
      authors: ['Neil Gaiman', 'Terry Pratchett'],
      isbn: '9780380789030',
    },
    {
      id: 4,
      title: 'To Kill a Mockingbird',
      authors: ['Harper Lee'],
      isbn: '9780060935467',
    },
    {
      id: 5,
      title: 'The Help',
      authors: ['Kathryn Stockett', 'Tate Taylor'],
      isbn: '9780425232200',
    },
    {
      id: 6,
      title: 'The Great Gatsby',
      authors: ['F. Scott Fitzgerald'],
      isbn: '9780743273565',
    },
  ];

  constructor() {}

  getBooks = (): Book[] => {
    return this.books;
  };
}
