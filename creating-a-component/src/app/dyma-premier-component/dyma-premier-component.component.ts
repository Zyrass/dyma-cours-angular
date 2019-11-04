import { Component } from '@angular/core';

@Component({
    selector:       'app-dyma-premier-component',
    templateUrl:    './dyma-premier-component.component.html'
})

export class DymaPremierComponent {

    // Définition d'une variable vide qui est elle, typé pour forcé son contenu pour un retour de type string. 
    title: string;

    // Définition d'un constructor.
    constructor () {

        // Le title sera remplit d'une chaine de caractère (string) afin d'être utilisé via l'interpolation dans le fichier "dyma-premier-component.component.html".
        this.title = "Dyma et notre premier composant créer à la main";

    }

}