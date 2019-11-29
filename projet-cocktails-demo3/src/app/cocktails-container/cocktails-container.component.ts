import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../shared/models/cocktail.model';

@Component({
  selector: 'app-cocktails-container',
  templateUrl: './cocktails-container.component.html',
  styleUrls: ['./cocktails-container.component.css']
})
export class CocktailsContainerComponent implements OnInit {

  /*
    |-------------------------------------------------------------------------------------
    | Conception d'une propriété de Type Cocktail. Utilisé pour le data-binding.
    |-------------------------------------------------------------------------------------
  */
  public unCocktail: Cocktail;

  /*
    |-------------------------------------------------------------------------------------
    | Définition d'un tableau avec plusieurs Cocktails pré-définit.
    |-------------------------------------------------------------------------------------
  */
  public listeDesCocktails: Cocktail[] = [
    new Cocktail(
      "Azzuro",
      "https://www.destinationcocktails.fr/wp-content/uploads/recipes/484_azzuro.jpg",
      "Image d'un Azzuro",
      "L'Azzuro et sa couleur bleu pétante !!."
    ),
    new Cocktail(
      "Mojito Fraise Ambré",
      "https://www.destinationcocktails.fr/wp-content/uploads/recipes/282_mojitofraiseambre.jpg",
      "Image d'un Mojito Fraise Ambré",
      "Le Mojito revisité pour le plus grand plaisir de nos papillles."
    ),
    new Cocktail(
      "Airbus",
      "https://www.destinationcocktails.fr/wp-content/uploads/recipes/126_airbus.jpg",
      "Image d'un Airbus",
      "L'Airbus vous fera décoller pour le plus grand bonheur de vos papilles."
    ),
  ];

  constructor() {}
  ngOnInit() {
    
    /*
    |-------------------------------------------------------------------------------------
    | Pré-chargement d'un cocktail.
    |-------------------------------------------------------------------------------------
    */
    this.unCocktail = this.listeDesCocktails[1]
  }

  /*
    |-------------------------------------------------------------------------------------
    | Définition de la méthode qui va nous permettre via notre Event définit dans 
    | le fichier cocktails-list.component.ts de récupérer un index qui deviendra notre event.
    | Ainsi au clic, il nous sera possible de charger un tout autre cocktail.
    |-------------------------------------------------------------------------------------
  */
  getOneCocktail(parametreEvent: number): void {
    this.unCocktail = this.listeDesCocktails[parametreEvent];
  }
}
