import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styles: [`
  .rectangle {
    min-height: 100px;
    max-width: 200px;
    background-color: lightskyblue;
    margin: 20px;
  }
`]

})

export class NgStyleComponent implements OnInit {
  
  public testModifRectangle: {};

  /*
  |----------------------------------------------------------------------------------
  | Définition des variables qui sont a modifier.
  |----------------------------------------------------------------------------------
  */
  boxShadow: boolean = true;
  borderRadius: boolean = true;
  borderSolid: boolean = true;

  /*
  |----------------------------------------------------------------------------------
  | Définition d'un setter pour modifier le contenu via un ternaire.
  |----------------------------------------------------------------------------------
  */
  setTestModifRectangle() {
    this.testModifRectangle = {
      "box-shadow" : this.boxShadow ? "0 0 10px black" : "none",
      "border-radius" : this.borderRadius ? "30px" : "none",
      "border" : this.borderSolid ? "1px solid black" : "none"
    }
  }

  /*
  |----------------------------------------------------------------------------------
  | Chargement du contenu (je ne connais pas encore OnInit)
  |----------------------------------------------------------------------------------
  */
  ngOnInit() {
    this.setTestModifRectangle();
  }

}
