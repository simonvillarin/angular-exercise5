import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { BlogService } from '../../services/blog.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss'],
})
export class BlogFormComponent {
  blogForm: FormGroup;
  commentsArray: FormArray;
  id: number = this.route.snapshot.queryParams['id'] || 0;

  constructor(
    private fb: FormBuilder,
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    let title = this.route.snapshot.queryParams['title'];
    let description = route.snapshot.queryParams['description'];
    let author = route.snapshot.queryParams['author'];
    let comments = route.snapshot.queryParams['comments'];

    this.blogForm = this.fb.group({
      title: [title || '', [Validators.required]],
      description: [description || '', [Validators.required]],
      author: [author || '', [Validators.required]],
      comments: fb.array(comments || [new FormControl('')]),
    });
    this.commentsArray = this.blogForm.controls['comments'] as FormArray;
  }

  deleteBlog = (i: number) => {
    this.commentsArray.removeAt(i);
  };

  addBlog = () => {
    this.commentsArray.push(new FormControl(''));
  };

  onSubmit = () => {
    if (this.blogForm.valid) {
      if (this.id == 0) {
        this.blogService.createBlog(this.blogForm.value).subscribe(() => {});
      } else {
        this.blogService
          .updateBlog(this.blogForm.value, this.id)
          .subscribe(() => {});
      }
      this.router.navigate(['blog']);
    }
  };
}
