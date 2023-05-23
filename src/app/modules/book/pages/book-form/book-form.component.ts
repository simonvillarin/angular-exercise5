import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
})
export class BookFormComponent {
  books: Book[] = this.bookService.getBooks();
  bookForm: FormGroup;
  authorsArray: FormArray;
  authors: string = '';
  id: number = 0;

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.queryParams['id'] || -1;
    let book = this.bookService.books.filter((book) => book.id == this.id);

    if (this.id != -1) {
      book[0].authors.map((author, index) => {
        if (book[0].authors.length == index + 1) {
          this.authors += author;
        } else {
          this.authors += author + ', ';
        }
      });
    }
    this.bookForm = fb.group({
      id: [this.id != -1 ? book[0].id : this.bookService.books.length + 1],
      title: [this.id != -1 ? book[0].title : '', [Validators.required]],
      authors: this.fb.array([]),
      isbn: [this.id != -1 ? book[0].isbn : '', [Validators.required]],
    });
    this.authorsArray = this.bookForm.controls['authors'] as FormArray;
  }

  onSubmit = () => {
    if (this.bookForm.valid) {
      const authorsSplit = this.authors.split(',');
      authorsSplit.map((author) =>
        this.authorsArray.push(new FormControl(author))
      );

      if (this.id == -1) {
        this.bookService.books.push(this.bookForm.value);
      } else {
        const filterBooks = this.bookService.books.filter(
          (book) => book.id == this.id
        );
        const index = this.bookService.books.indexOf(filterBooks[0]);
        this.books[index].title = this.bookForm.get('title')?.value;
        this.books[index].authors = this.bookForm.get('authors')?.value;
        this.books[index].isbn = this.bookForm.get('isbn')?.value;
        this.bookService.books = this.books;
      }

      this.authors = '';
      this.bookForm.reset();
      this.router.navigate(['/book']);
    }
  };
}
