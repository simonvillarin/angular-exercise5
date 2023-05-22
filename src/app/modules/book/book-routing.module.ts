import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookFormComponent } from './pages/book-form/book-form.component';
import { BookComponent } from './pages/book/book.component';

const routes: Routes = [
  {
    path: 'book',
    component: BookComponent,
  },
  {
    path: 'book/form',
    component: BookFormComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class BookRoutingModule {}
