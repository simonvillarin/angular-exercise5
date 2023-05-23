import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-display',
  templateUrl: './book-display.component.html',
  styleUrls: ['./book-display.component.scss'],
})
export class BookDisplayComponent {
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  title: string = '';
  authors: string[] = [];
  isbn: string = '';

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const filterBlogs = this.bookService.books.filter(
        (book) => book.id == params['id']
      );
      this.title = filterBlogs[0].title;
      this.authors = filterBlogs[0].authors;
      this.isbn = filterBlogs[0].isbn;
    });
  }
}
