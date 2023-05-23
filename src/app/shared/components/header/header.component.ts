import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/modules/blog/services/blog.service';
import { Book } from 'src/app/modules/book/models/book';
import { BookService } from 'src/app/modules/book/services/book.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  books: Book[] = this.bookService.getBooks();

  constructor(
    private router: Router,
    private blogService: BlogService,
    private bookService: BookService
  ) {}

  add = () => {
    if (this.router.url != '/profile') {
      this.router.navigate([`${this.router.url}/form`]);
    }
  };

  deleteAll = () => {
    if (this.router.url == '/blog') {
      this.blogService.blogs = [];
    }
    if (this.router.url == '/book') {
      this.bookService.books = [];
    }
  };
}
