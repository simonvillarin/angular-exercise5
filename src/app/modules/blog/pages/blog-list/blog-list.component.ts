import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(private blogService: BlogService, private router: Router) {}

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs = () => {
    this.blogService.getBlogs().subscribe((data) => {
      this.blogs = data;
    });
  };

  editBlog = (blog: Blog) => {
    this.router.navigate([`blog/form`], {
      queryParams: {
        id: blog.id,
        title: blog.title,
        description: blog.description,
        author: blog.author,
        comments: blog.comments,
      },
    });
  };

  deleteBlog = (blog: Blog) => {
    this.blogService.deleteBlog(blog.id).subscribe(() => {});
    this.blogs = this.blogs.filter((b) => b.id != blog.id);
  };
}
