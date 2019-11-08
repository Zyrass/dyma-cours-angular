import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styles: []
})

export class TwoWayDataBindingComponent {

  public myFirstname: string;
  public myLastname: string;

  constructor() {
    this.myFirstname = "";
    this.myLastname = "";
  }

}
