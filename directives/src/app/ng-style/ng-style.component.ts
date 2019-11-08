import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styles: [`
  .carre {
    height: 150px;
    width: 150px;
    background-color: lightskyblue;
    margin: 20px;
  }
`]

})

export class NgStyleComponent implements OnInit {
  
  public testModifCarre: {};

  boxShadow: boolean = true;
  borderRadius: boolean = true;
  borderSolid: boolean = true;

  setTestModifCarre() {
    this.testModifCarre = {
      "box-shadow" : this.boxShadow ? "0 0 10px black" : "none",
      "border-radius" : this.borderRadius ? "25px" : "none",
      "border" : this.borderSolid ? "1px solid black" : "none"
    }
  }

  ngOnInit() {
    this.setTestModifCarre();
  }

}
