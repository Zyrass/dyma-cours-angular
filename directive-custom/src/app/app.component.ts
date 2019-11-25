import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Pour la navigation + le titre de la page
  public chapter: number = 6;
  public lesson: number = 2
  public title: string = "Directive-Custom"

}
