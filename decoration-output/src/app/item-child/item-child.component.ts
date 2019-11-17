import { OnInit, Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-item-child',
  templateUrl: './item-child.component.html',
  styleUrls: ['./item-child.component.css']

})

export class ItemChildComponent implements OnInit {
  @Input() public name: string;
  @Output() public deleteName: EventEmitter<string> = new EventEmitter();
  delete() {
    this.deleteName.emit(this.name)
  }
  constructor() {}
  ngOnInit() {}
}