import { Component } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  books: Book[] = this.bookService.getBooks();

  constructor(private bookService: BookService, private router: Router) {}

  edit = (id: number) => {
    this.router.navigate([`book/form`], { queryParams: { id: id } });
  };

  delete = (id: number) => {
    const filterBooks = this.bookService.books.filter((book) => book.id != id);
    this.bookService.books = filterBooks;
    this.books = filterBooks;
  };
}
