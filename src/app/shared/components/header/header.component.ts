import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/modules/blog/services/blog.service';
import { BookService } from 'src/app/modules/book/services/book.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private router: Router,
    private blogService: BlogService,
    private book: BookService
  ) {}

  add = () => {
    if (
      !(
        this.router.url == '/profile' ||
        this.router.url == '/blog/form' ||
        this.router.url == '/book/form'
      )
    ) {
      this.router.navigate([`${this.router.url}/form`]);
    }
  };

  deleteAll = () => {};
}
