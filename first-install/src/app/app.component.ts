import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {
  
  // Pour la navigation + le titre de la page
  public chapter: number = 1;
  public lesson: number = 1
  public title: string = "Première installation"



}
