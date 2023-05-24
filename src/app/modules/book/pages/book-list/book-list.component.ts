import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks = () => {
    this.bookService.getBooks().subscribe((data) => (this.books = data));
  };

  edit = (book: Book) => {
    this.router.navigate([`book/form`], {
      queryParams: {
        id: book.id,
        title: book.title,
        authors: book.authors,
        isbn: book.isbn,
      },
    });
  };

  delete = (book: Book) => {
    this.bookService.deleteBook(book.id).subscribe(() => {});
    this.books = this.books.filter((b) => b.id != book.id);
  };
}
