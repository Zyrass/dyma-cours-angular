import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styles: []
})

export class StringInterpolationComponent {

  interpolationString: string;
  booleanInterpolation: boolean;
  numberInterpolation: number;
  objectInterpolation: { firstname: string, lastname: string};

  constructor() {
    this.interpolationString = "I'm a content of interpolationString variable";
    this.booleanInterpolation = true;
    this.numberInterpolation = 69;
    this.objectInterpolation = {
      firstname: "Alain",
      lastname: "Guillon"
    }
  }

}
