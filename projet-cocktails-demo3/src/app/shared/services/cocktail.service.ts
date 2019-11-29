import { Injectable } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CocktailService {

  public listingCocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject([
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
    )
  ])

  // La méthode .value est un getter qui permet d'obtenir la valeur actuelle d'un BehaviorSubject. Cela permet de récupérer le tableau de cocktails que nous avons passé comme valeur initiale.
  public cocktail: BehaviorSubject<Cocktail> = new BehaviorSubject( this.listingCocktails.value[1] );

  selectCocktail(index: number) {
    this.cocktail.next(this.listingCocktails.value[index]);
  }

  constructor() { }
}
