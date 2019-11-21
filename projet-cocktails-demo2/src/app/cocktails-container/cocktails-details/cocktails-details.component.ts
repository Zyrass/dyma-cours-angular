import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../../shared/cocktail.model';

@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styles: []
})

export class CocktailsDetailsComponent implements OnInit {

  public cocktailDemo: Cocktail = new Cocktail(
    "Mojito",
    "https://www.mesarbustes.fr/media/catalog/product/cache/6/image/9df78eab33525d08d6e5fb8d27136e95/m/e/mentha_piperita_mojito_cocktail_-_menthe_pour_mojito.jpg",
    "Photo représentative du Mojito",
    "Le mojito, prononcé [moˈxito] en espagnol, ou mojito, morito, ou mohito en français, est un cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, à base de rhum, de soda, de citron vert, et de feuilles de menthe fraîche"
  );

  // public mojito: {};
  public mojito2: string[] = [];

  constructor() {

    // this.mojito = {
    //   ingrediants: {
    //     ingrediant1: "6 cl de rhum cubain (havana club, bacardi)",
    //     ingrediant2: "3 cl de jus de citron verts",
    //     ingrediant3: "7 feuilles de menthe",
    //     ingrediant4: "2 cl de sirop de sucre de canne",
    //     ingrediant5: "Eau gazeuse"
    //   }
    // }

    this. mojito2 = [
      "6 cl de rhum cubain (havana club, bacardi)",
      "3 cl de jus de citron verts",
      "7 feuilles de menthe",
      "2 cl de sirop de sucre de canne",
      "Eau gazeuse"
    ]
  }

  ngOnInit() {
  }

}
