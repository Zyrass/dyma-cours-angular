import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styles: [`
    skyblue {
      background-color: 'lightskyblue';
    }
    salomon {
      background-color: 'lightsalomon';
    }
  `]
})
export class NgClassComponent implements OnInit {

  public backgroundColor: string;

  ngOnInit() {
    this.backgroundColor = "";
  }

}
