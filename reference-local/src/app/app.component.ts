import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})

export class AppComponent implements OnInit {
  
  // Pour la navigation + le titre de la page
  public chapter: number = 4;
  public lesson: number = 5
  public title: string = "Variable Locale"

  // Propriétés
  public newText: string;
  public tabText: string[] = [
    "Noël approche à grand pas... Pensez aux cadeaux !!!",
    "La neige tombera certainement dans la journée."
  ];

  // Méthode pour ajouter une nouvelle référence afin de remplacer 
  // le double data-binding qui est lui très gourmand en ressource.
  addNewTextWithAReference(ressource: any) {
    // A décommenter pour voir le résultat dans la console.
    // console.log(ressource);
    // console.log(ressource.type);
    // console.log(ressource.value);
    this.tabText.push(ressource.value);
  }

  // Méthode avec un EventEmitter passé en paramètre.
  deleteThisText(parameterEventEmitter) {
    this.tabText.splice(this.tabText.indexOf(parameterEventEmitter), 1)
  }

  constructor() {}
  ngOnInit() {}

}