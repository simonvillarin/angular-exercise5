import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss'],
})
export class BlogFormComponent {
  blogForm: FormGroup;
  commentsArray: FormArray;
  isDisplay: boolean = false;
  comments: string = '';
  name: string = '';
  description: string = '';
  author: string = '';
  commentsSplit: string[] = [];

  constructor(private fb: FormBuilder) {
    this.blogForm = fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      author: ['', [Validators.required]],
      comments: this.fb.array([]),
    });
    this.commentsArray = this.blogForm.controls['comments'] as FormArray;
  }

  onSubmit = () => {
    console.log(this.blogForm.value);
    if (this.blogForm.valid) {
      this.commentsSplit = this.comments.split(',');
      this.commentsSplit.map((comment) =>
        this.commentsArray.push(new FormControl(comment))
      );
      this.isDisplay = true;
      this.name = this.blogForm.get('name')?.value;
      this.description = this.blogForm.get('description')?.value;
      this.author = this.blogForm.get('author')?.value;
      this.comments = '';
      this.blogForm.reset();
    }
  };
}
