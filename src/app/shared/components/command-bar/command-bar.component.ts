import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss'],
})
export class CommandBarComponent {
  @Output() addEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() deleteAllEmitter = new EventEmitter<void>();

  constructor(private router: Router) {}

  add = () => {
    this.addEmitter.emit();
  };

  deleteAll = () => {
    this.deleteAllEmitter.emit();
  };

  logout = () => {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  };
}
