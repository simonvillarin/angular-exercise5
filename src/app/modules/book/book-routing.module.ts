import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookFormComponent } from './pages/book-form/book-form.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookDisplayComponent } from './pages/book-display/book-display.component';

const routes: Routes = [
  {
    path: 'book',
    component: BookListComponent,
  },
  {
    path: 'book/form',
    component: BookFormComponent,
  },
  {
    path: 'book/:id',
    component: BookDisplayComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class BookRoutingModule {}
