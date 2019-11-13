import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../shared/cocktail.model';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styles: []
})
export class CocktailsListComponent implements OnInit {

  public cocktails: Cocktail[] = [];

  constructor() {
    this.cocktails = [
      new Cocktail("Mojito", "Photo représentative du Mojito", "blablabla", "Description"),
      new Cocktail("Vendetta", "Photo représentative du Mojito", "blablabla", "Description"),
      new Cocktail("Virgin Colada", "Photo représentative du Mojito", "blablabla", "Description"),
      new Cocktail("Secret de la mer", "Photo représentative du Mojito", "blablabla", "Description"),
      new Cocktail("Punch", "Photo représentative du Mojito", "blablabla", "Description"),
      new Cocktail("Le kama sutra", "Photo représentative du Mojito", "blablabla", "Description"),
    ]
  }

  ngOnInit() {
  }

}
