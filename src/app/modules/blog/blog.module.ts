import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogFormComponent } from './pages/blog-form/blog-form.component';
import { BlogRoutingModule } from './blog-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { MatIconModule } from '@angular/material/icon';
import { BlogDisplayComponent } from './pages/blog-display/blog-display.component';

@NgModule({
  declarations: [BlogFormComponent, BlogListComponent, BlogItemComponent, BlogDisplayComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
  ],
})
export class BlogModule {}
