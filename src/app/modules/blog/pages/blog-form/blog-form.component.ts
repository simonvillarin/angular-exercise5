import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss'],
})
export class BlogFormComponent {
  blogForm: FormGroup;
  commentsArray: FormArray;
  comments: string = '';

  constructor(
    private fb: FormBuilder,
    private blogService: BlogService,
    private router: Router
  ) {
    this.blogForm = fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      author: ['', [Validators.required]],
      comments: this.fb.array([]),
    });
    this.commentsArray = this.blogForm.controls['comments'] as FormArray;
  }

  onSubmit = () => {
    if (this.blogForm.valid) {
      const commentsSplit = this.comments.split(',');
      commentsSplit.map((comment) =>
        this.commentsArray.push(new FormControl(comment))
      );
      this.blogService.blogs.push(this.blogForm.value);
      this.comments = '';
      this.blogForm.reset();
      this.router.navigate(['/blog']);
    }
  };
}
