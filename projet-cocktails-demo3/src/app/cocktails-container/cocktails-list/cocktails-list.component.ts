import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cocktail } from 'src/app/shared/models/cocktail.model';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {

  @Input() public listingCocktails: Cocktail[];
  @Output() public indexEvent: EventEmitter<number> = new EventEmitter<number>();

  // Ajout de la propriétée (variable) afin de l'utiliser dans mon template html.
  public activeCocktail: number;

  // ici je passe l'index à la propriétée précédemment créer afin de l'exploiter dans ma directive active.directive.ts 
  getCocktail(parametreIndex: number): void {
    this.activeCocktail = parametreIndex;
    this.indexEvent.emit(parametreIndex);
  }

  constructor() {}
  ngOnInit() {}
}
