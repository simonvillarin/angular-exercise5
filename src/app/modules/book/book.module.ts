import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRoutingModule } from './book-routing.module';
import { BookFormComponent } from './pages/book-form/book-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { MatIconModule } from '@angular/material/icon';
import { BookDisplayComponent } from './pages/book-display/book-display.component';

@NgModule({
  declarations: [BookFormComponent, BookListComponent, BookItemComponent, BookDisplayComponent],
  imports: [
    BookRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
  ],
})
export class BookModule {}
