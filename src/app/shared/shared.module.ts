import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandBarComponent } from './components/command-bar/command-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CommandBarComponent, HeaderComponent],
  imports: [CommonModule, RouterModule, MatButtonModule],
  exports: [HeaderComponent, RouterModule],
})
export class SharedModule {}
