import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  public newName: string;
  public tabName: string[] = [];

  add(reference: any) {
    console.log(reference);
    console.log(reference.value);
    console.log(reference);
    this.tabName.push(reference.value);
  }

  deleteThisName(parameter) {
    this.tabName.splice(this.tabName.indexOf(parameter), 1)
  }
}