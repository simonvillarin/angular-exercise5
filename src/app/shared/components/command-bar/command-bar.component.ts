import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss'],
})
export class CommandBarComponent {
  @Output() addEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() deleteAllEmitter = new EventEmitter<void>();

  add = () => {
    this.addEmitter.emit();
  };

  deleteAll = () => {
    this.deleteAllEmitter.emit();
  };
}
