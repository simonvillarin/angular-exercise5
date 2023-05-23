import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss'],
})
export class BlogItemComponent {
  @Input('blog') blog: Blog | undefined;
  @Output() editEmitter: EventEmitter<number> = new EventEmitter<number>();
  @Output() deleteEmitter: EventEmitter<number> = new EventEmitter<number>();

  edit = (id: number) => {
    this.editEmitter.emit(this.blog?.id);
    console.log(`Edit book id: ${id}`);
  };

  delete = (id: number) => {
    this.deleteEmitter.emit(this.blog?.id);
    console.log(`Delete book id: ${id}`);
  };
}
