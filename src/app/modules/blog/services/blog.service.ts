import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  serverUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getBlogs = () => {
    return this.http.get<Blog[]>(`${this.serverUrl}/blogs`);
  };

  createBlog = (blog: Blog) => {
    return this.http.post(`${this.serverUrl}/blogs`, blog);
  };

  updateBlog = (blog: Blog, id: number) => {
    return this.http.put(`${this.serverUrl}/blogs/${id}`, blog);
  };

  deleteBlog = (id: number) => {
    return this.http.delete(`${this.serverUrl}/blogs/${id}`);
  };
}
