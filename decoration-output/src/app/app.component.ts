import { OnInit, Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent implements OnInit {
  public newName: string;
  public tabName: string[] = [];
  deleteThisName(param) {
    this.tabName.splice(this.tabName.indexOf(param), 1)
  }
  
  constructor() {}
  ngOnInit() {}
}