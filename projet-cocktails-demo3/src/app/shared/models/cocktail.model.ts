import { Ingredient } from './ingredient.model';

export class Cocktail {
    constructor( 
        public name: string, 
        public urlImage: string, 
        public altImage: string, 
        public description: string, 
        public ingrediants?: Ingredient[] 
    ) {}
}