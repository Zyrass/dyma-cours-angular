import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // Définition du double data-binding
  public nomDuFruitSurLeParent: string;
  public listeDesFruitsSurLeParent: string[] = [];
}
