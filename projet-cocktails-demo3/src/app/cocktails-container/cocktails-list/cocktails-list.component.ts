import { Component, OnInit, } from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from '../../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {

  public listingCocktails: Cocktail[];
  public activeCocktail: number;

  constructor(private cocktailService: CocktailService) {}

  ngOnInit() {
    this.cocktailService.listingCocktails.subscribe ( (dataCocktails: Cocktail[]) => {
      this.listingCocktails = dataCocktails
    });
  }
  
  getCocktail(parametreIndex: number): void {
    this.activeCocktail = parametreIndex;
    this.cocktailService.selectCocktail(parametreIndex);
  }

}
