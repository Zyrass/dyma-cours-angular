import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cocktail } from 'src/app/shared/cocktail.model';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {

  /*
  |-------------------------------------------------------------------------------------
  | Je créer avec le décorateur Input une liaison avec le parent : (Parent vers Enfant)
  | (cocktails-container.component.ts)
  |-------------------------------------------------------------------------------------
  */
  @Input() public listingCocktails: Cocktail[];

  /*
  |-------------------------------------------------------------------------------------
  | Je créer avec le décorateur Output une liaison avec le parent : (Enfant vers Parent)
  | (cocktails-container.component.ts)
  | Je définis ici un EventEmitter de type nombre qui permettra de devenir l'index de
  | notre itération en cours.
  |-------------------------------------------------------------------------------------
  */
  @Output() public indexEvent: EventEmitter<number> = new EventEmitter<number>();

  /*
  |-------------------------------------------------------------------------------------
  | Je définis ici une méthode ou je passe en paramètre un nombre.
  | Ce paramètre sera l'event créer précédemment.
  | La méthode emit() provient de la classe EventEmitter.
  |-------------------------------------------------------------------------------------
  */
  getCocktail(parametreIndex: number): void {
    this.indexEvent.emit(parametreIndex);
  }

  constructor() {}
  ngOnInit() {}
}
