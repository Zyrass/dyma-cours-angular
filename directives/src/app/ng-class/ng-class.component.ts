import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {

  /*
  |----------------------------------------------------------------------------------
  | Définition des propréités qui sont a modifier dans le constructor.
  |----------------------------------------------------------------------------------
  */
  boxShadow: boolean;
  borderRadius: boolean;
  borderSolid: boolean;

  constructor() {

    /*
    |----------------------------------------------------------------------------------
    | Toutes les propriétés sont initialisé à false afin que rien ne soit activé.
    |----------------------------------------------------------------------------------
    */
    this.boxShadow = false;
    this.borderRadius = false;
    this.borderSolid = false;

  }

}
