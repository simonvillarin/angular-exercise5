import { Component } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent {
  blogs: Blog[] = this.blogService.blogs;

  constructor(private blogService: BlogService, private router: Router) {}

  edit = (id: number) => {
    this.router.navigate([`/blog/${id}`]);
  };

  delete = (id: number) => {
    const filterBlogs = this.blogService.blogs.filter((blog) => blog.id != id);
    this.blogService.blogs = filterBlogs;
    this.blogs = filterBlogs;
  };
}
