import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-child',
  templateUrl: './item-child.component.html',
  styleUrls: ['./item-child.component.css']
})
export class ItemChildComponent {

  @Input('langageInfo') public infoLangage: string;
}
