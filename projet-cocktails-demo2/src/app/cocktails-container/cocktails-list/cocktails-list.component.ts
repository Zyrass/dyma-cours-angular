import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../../shared/cocktail.model';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styles: []
})
export class CocktailsListComponent implements OnInit {

  public tableauDesCocktails: Cocktail[] = [];

  constructor() {
    this.tableauDesCocktails = [
      new Cocktail("Mojito", "url", "alt", "description"),
      new Cocktail("Virgin Colada", "url", "alt", "description"),
      new Cocktail("Secret de la mer", "url", "alt", "description"),
      new Cocktail("Monkey Jame Sour", "url", "alt", "description"),
    ];
  }

  ngOnInit() {

  }

}
