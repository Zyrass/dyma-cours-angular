import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-item-child',
  templateUrl: './item-child.component.html',
  styles: []
})
export class ItemChildComponent implements OnInit {
  @Input() public name: string;
  @Output() public deleteName: EventEmitter<string> = new EventEmitter();
  delete() {
    this.deleteName.emit(this.name);
  }
  constructor() {}
  ngOnInit() {}

}
