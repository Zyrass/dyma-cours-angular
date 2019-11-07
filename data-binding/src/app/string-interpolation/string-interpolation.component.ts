import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styles: []
})

export class StringInterpolationComponent {

  /*
  |----------------------------------------------------------------------------------
  | Définition des variables qui seront interpolé
  |----------------------------------------------------------------------------------
  */
  public interpolationString: string;
  public booleanInterpolation: boolean;
  public numberInterpolation: number;
  public objectInterpolation: { firstname: string, lastname: string};

  constructor() {

    // Type string
    this.interpolationString = "I'm a content of the interpolationString variable";

    // Type boolean
    this.booleanInterpolation = true;

    // Type number
    this.numberInterpolation = 69;

    // Type object
    this.objectInterpolation = {
      firstname: "Alain",
      lastname: "Guillon"
    }

  }

}
