export class Cocktail {
    public name: string;
    public imageAlt: string;
    public imageSrc: string;
    public description: string;

    constructor(nameCocktail: string, altImage: string, srcImage: string, cocktailDescription: string) {
        this.name = nameCocktail;
        this.imageAlt = altImage;
        this.imageSrc = srcImage;
        this.description = cocktailDescription;
    }
}