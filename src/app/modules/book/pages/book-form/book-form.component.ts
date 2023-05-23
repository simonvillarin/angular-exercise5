import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
})
export class BookFormComponent {
  bookForm: FormGroup;
  authorsArray: FormArray;
  authors: string = '';

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private router: Router
  ) {
    this.bookForm = fb.group({
      title: ['', [Validators.required]],
      authors: this.fb.array([]),
      isbn: ['', [Validators.required]],
    });
    this.authorsArray = this.bookForm.controls['authors'] as FormArray;
  }

  onSubmit = () => {
    if (this.bookForm.valid) {
      const authorsSplit = this.authors.split(',');
      authorsSplit.map((author) =>
        this.authorsArray.push(new FormControl(author))
      );
      this.authors = '';
      this.bookService.books.push(this.bookForm.value);
      this.bookForm.reset();
      this.router.navigate(['/blog']);
    }
  };
}
