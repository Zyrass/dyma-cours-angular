import { Component } from '@angular/core';

@Component({
  selector: 'app-enfant',
  template: `

  <li class="list-group-item list-group-item-action bg-secondary text-white bg-dark">
    <ng-content></ng-content>
  </li>

  <li class="list-group-item list-group-item-action bg-secondary text-white">
    Début de la projection de ng-content - <strong>( Je n'ai aucun tag ng-content )</strong>
  </li>
  
  <li class="list-group-item list-group-item-action bg-success text-white">
    <ng-content select="[jeSuisUnAttribut]"></ng-content>
  </li>
  
  <li class="list-group-item list-group-item-action bg-secondary text-white">
    Suite de la projection de ng-content - <strong>( Je n'ai aucun tag ng-content )</strong>
  </li>
  
  <li class="list-group-item list-group-item-action bg-success text-white">
    <ng-content select=".JeSuisUneClasse"></ng-content>
  </li>

  <li class="list-group-item list-group-item-action bg-secondary text-white">
    Suite de la projection de ng-content - <strong>( Je n'ai aucun tag ng-content )</strong>
  </li>
  
  <li class="list-group-item list-group-item-action bg-success text-white">
    <ng-content select="div"></ng-content>
  </li>

  <li class="list-group-item list-group-item-action bg-secondary text-white">Fin de la projection du ng-content - <strong>( Je n'ai aucun tag ng-content )</strong></li>
  `,
  styles: []
})
export class EnfantComponent {
  constructor() { }
}
