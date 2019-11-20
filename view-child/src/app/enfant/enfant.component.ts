import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enfant',
  template: `
    <li class="list-group-item list-group-item-action" style="border: 1px solid #a9a9a9">
      {{ movie }}
      <span class="close" (click)="delete()">&times;</span>
    </li>  
  `,
  styles: []
})
export class EnfantComponent implements OnInit {

  @Input() public movie: string;
  @Output() public deleteMovie: EventEmitter<string> = new EventEmitter();

  delete() {
    this.deleteMovie.emit(this.movie);
  }
  constructor() { }

  ngOnInit() {
  }

}
