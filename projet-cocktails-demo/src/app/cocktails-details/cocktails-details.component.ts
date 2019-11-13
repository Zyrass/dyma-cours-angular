import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../shared/cocktail.model';

@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styles: []
})
export class CocktailsDetailsComponent implements OnInit {

  public srcImage: string = "https://www.mesarbustes.fr/media/catalog/product/cache/6/image/9df78eab33525d08d6e5fb8d27136e95/m/e/mentha_piperita_mojito_cocktail_-_menthe_pour_mojito.jpg";
  public altImage: string = "Photo représentative du Mojito";

  public mojito = new Cocktail(
    "Mojito",
    "Photo représentative du Mojito",
    "https://www.mesarbustes.fr/media/catalog/product/cache/6/image/9df78eab33525d08d6e5fb8d27136e95/m/e/mentha_piperita_mojito_cocktail_-_menthe_pour_mojito.jpg",
    "Le mojito, prononcé [moˈxito] en espagnol, ou mojito, morito, ou mohito en français, est un cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, à base de rhum, de soda, de citron vert, et de feuilles de menthe fraîche"
  );

  constructor() {
  }

  ngOnInit() {
  }

}
