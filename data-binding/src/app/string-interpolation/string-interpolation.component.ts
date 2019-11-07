import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  template: `
    <h2>Folder : <mark>string-interpolation</mark></h2>

    <!-- Je suis l'interpolation "textStringInterpolation" -->
    <p>
      {{ textStringInterpolation }}
    </p>
  `,
  styles: []
})


export class StringInterpolationComponent {

  
  textStringInterpolation: string;

  constructor() {
    this.textStringInterpolation = "Je suis un contenu issu de ma class StringInterpolationComponent";
  }

}
