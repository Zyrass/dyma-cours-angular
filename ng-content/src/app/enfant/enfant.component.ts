import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enfant',
  template: `
    <li class="list-group-item list-group-item-action bg-secondary text-white">Avant Injection</li>
    <li class="list-group-item list-group-item-action bg-success text-white">
      <ng-content></ng-content>
    </li>
    <li class="list-group-item list-group-item-action bg-secondary text-white">Après Injection</li>
  `,
  styles: []
})
export class EnfantComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
