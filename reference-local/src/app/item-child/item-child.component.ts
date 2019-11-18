import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-child',
  templateUrl: './item-child.component.html', 
  styleUrls: []
})

export class ItemChildComponent implements OnInit {
  // Décorateur Input()
  @Input('aliasDecorateurInput') public showText: string;
  // Décorateur Output()
  @Output('aliasOutputEventEmitter') public deleteText: EventEmitter<string> = new EventEmitter();

  // Métode qui nous permet de définir un EventEmitter afin de cibler un item précis
  delete() {
    this.deleteText.emit(this.showText);
  }

  ngOnInit() {}

}