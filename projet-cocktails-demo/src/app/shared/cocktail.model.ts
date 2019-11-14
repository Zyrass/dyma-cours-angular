export class Cocktail {
    public name: string;
    public urlImage: string;
    public altImage: string;
    public description: string;

    constructor(newName: string, newUrlImage: string, newAltImage: string, newDescription: string) {
        this.name = newName;
        this.urlImage = newUrlImage;
        this.altImage = newAltImage;
        this.description = newDescription;
    }
}