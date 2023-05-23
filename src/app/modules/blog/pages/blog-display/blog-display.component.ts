import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-display',
  templateUrl: './blog-display.component.html',
  styleUrls: ['./blog-display.component.scss'],
})
export class BlogDisplayComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  title: string = '';
  description: string = '';
  author: string = '';
  comments: string[] = [];

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const filterBlogs = this.blogService.blogs.filter(
        (blog) => blog.id == params['id']
      );
      this.title = filterBlogs[0].title;
      this.description = filterBlogs[0].description;
      this.author = filterBlogs[0].author;
      this.comments = filterBlogs[0].comments;
    });
  }
}
