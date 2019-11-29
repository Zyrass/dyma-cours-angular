import { Component, OnInit, Input } from '@angular/core';
import { Cocktail } from 'src/app/shared/models/cocktail.model';

@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styles: []
})

export class CocktailsDetailsComponent implements OnInit {
  
  /*
  |-------------------------------------------------------------------------------------
  | Je créer avec le décorateur Input une liaison avec le parent : (Parent vers Enfant)
  | (cocktails-container.component.ts)
  |-------------------------------------------------------------------------------------
  */
  @Input() public cocktail: Cocktail;

  constructor() {}
  ngOnInit() {}

}
