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
  blogs: Blog[] = this.blogService.getBlogs();
  blogForm: FormGroup;
  commentsArray: FormArray;
  comments: string = '';
  id: number = 0;

  constructor(
    private fb: FormBuilder,
    private blogService: BlogService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.queryParams['id'] || -1;
    let blog = this.blogService.blogs.filter((blog) => blog.id == this.id);

    if (this.id != -1) {
      blog[0].comments.map((comment, index) => {
        if (blog[0].comments.length == index + 1) {
          this.comments += comment;
        } else {
          this.comments += comment + ', ';
        }
      });
    }

    this.blogForm = fb.group({
      id: [this.id != -1 ? blog[0].id : this.blogService.blogs.length + 1],
      title: [this.id != -1 ? blog[0].title : '', [Validators.required]],
      description: [
        this.id != -1 ? blog[0].description : '',
        [Validators.required],
      ],
      author: [this.id != -1 ? blog[0].author : '', [Validators.required]],
      comments: fb.array([]),
    });
    this.commentsArray = this.blogForm.controls['comments'] as FormArray;
  }

  onSubmit = () => {
    if (this.blogForm.valid) {
      const commentsSplit = this.comments.split(',');
      commentsSplit.map((comment) =>
        this.commentsArray.push(new FormControl(comment))
      );
      if (this.id == -1) {
        this.blogService.blogs.push(this.blogForm.value);
      } else {
        const filterBlogs = this.blogService.blogs.filter(
          (blog) => blog.id == this.id
        );
        const index = this.blogService.blogs.indexOf(filterBlogs[0]);
        this.blogs[index].title = this.blogForm.get('title')?.value;
        this.blogs[index].description = this.blogForm.get('description')?.value;
        this.blogs[index].author = this.blogForm.get('author')?.value;
        this.blogs[index].comments = this.blogForm.get('comments')?.value;
        this.blogService.blogs = this.blogs;
      }
      this.comments = '';
      this.blogForm.reset();
      this.router.navigate(['/blog']);
    }
  };
}
