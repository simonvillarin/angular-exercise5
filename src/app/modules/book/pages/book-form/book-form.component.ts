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
  bookForm: FormGroup;
  authorsArray: FormArray;
  id: number = this.route.snapshot.queryParams['id'] | 0;

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    let title = this.route.snapshot.queryParams['title'];
    let authors = this.route.snapshot.queryParams['authors'];
    let isbn = this.route.snapshot.queryParams['isbn'];

    this.bookForm = this.fb.group({
      title: [title || '', [Validators.required]],
      authors: fb.array(authors || [new FormControl('')]),
      isbn: [isbn || '', [Validators.required]],
    });
    this.authorsArray = this.bookForm.controls['authors'] as FormArray;
  }

  deleteBook = (i: number) => {
    this.authorsArray.removeAt(i);
  };

  addBook = () => {
    this.authorsArray.push(new FormControl(''));
  };

  onSubmit = () => {
    if (this.bookForm.valid) {
      if (this.id == 0) {
        this.bookService.createBook(this.bookForm.value).subscribe(() => {});
      } else {
        this.bookService
          .updateBook(this.bookForm.value, this.id)
          .subscribe(() => {});
      }
      this.router.navigate(['book']);
    }
  };
}
