import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
})
export class BookFormComponent {
  bookForm: FormGroup;
  authorsArray: FormArray;
  isDisplay: boolean = false;
  authors: string = '';
  name: string = '';
  isbn: string = '';
  authorsSplit: string[] = [];

  constructor(private fb: FormBuilder) {
    this.bookForm = fb.group({
      name: ['', [Validators.required]],
      authors: this.fb.array([]),
      isbn: ['', [Validators.required]],
    });
    this.authorsArray = this.bookForm.controls['authors'] as FormArray;
  }

  onSubmit = () => {
    if (this.bookForm.valid) {
      this.authorsSplit = this.authors.split(',');
      this.authorsSplit.map((author) =>
        this.authorsArray.push(new FormControl(author))
      );
      this.isDisplay = true;
      this.name = this.bookForm.get('name')?.value;
      this.isbn = this.bookForm.get('isbn')?.value;
      this.authors = '';
      this.bookForm.reset();
    }
  };
}
