import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-child',
  templateUrl: './item-child.component.html',
  styleUrls: ['./item-child.component.css']
})

export class ItemChildComponent {

  @Input('aliasInput') public enfantLanguage: string;
  @Output('aliasOutput') public enfantDeleteEvent: EventEmitter<string> = new EventEmitter();

  deleteOutput() {
    this.enfantDeleteEvent.emit(this.enfantLanguage);
  }

}
