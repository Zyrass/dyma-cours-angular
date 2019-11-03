/*
|----------------------------------------------------------------------------------
| APP.COMPONENT.TS
|----------------------------------------------------------------------------------
| Le fichier app.module.ts permet de lié le fichier app.component.ts
| Une fois lié, nous exportons à la fin la classe dans le fichier main.ts
|----------------------------------------------------------------------------------
*/
import { Component } from '@angular/core';

/*
|----------------------------------------------------------------------------------
| Déclaration d'une décorative ici @Component
|----------------------------------------------------------------------------------
*/
@Component({

  /*
  |----------------------------------------------------------------------------------
  | Obligatoire, il permet de définir le futur tag qui sera raconnu par le navigateur
  |----------------------------------------------------------------------------------
  */
  selector: 'app-root',

  /*
  |----------------------------------------------------------------------------------
  | Obligatoire, il permet de définir le fichier HTML qui contiendra le contenu
  | de notre fichier composant.
  |----------------------------------------------------------------------------------
  */
  templateUrl: './app.component.html',

  /*
  |----------------------------------------------------------------------------------
  | Facultatif, deux choix s'offrent à nous :
  |   - le 1er avec styles: [{` code css `}], permet de définir du css comme
  |     si nous étions dans un propre fichier css.
  |
  |   - le 2ème styleUrls: ['./app.component.css'], permet de saisir du css dans
  |     un fichier externe.
  |----------------------------------------------------------------------------------
  | Les codes ci-dessous sont à commenter ou à décommenter pour voir les changements
  | selon tel ou tel choix.
  |----------------------------------------------------------------------------------
  */

  /*
  |----------------------------------------------------------------------------------
  | 1) le code CSS directement dans ce même fichier
  |----------------------------------------------------------------------------------
  */

  styles: [`
    h1 {
      color: white;
    }
  `]

  /*
  |----------------------------------------------------------------------------------
  | 2) le code CSS issu d'un fichier externe.
  |----------------------------------------------------------------------------------
  */

  // styleUrls: ['./app.component.css']

})

/*
|----------------------------------------------------------------------------------
| APP.MODULE.TS
|----------------------------------------------------------------------------------
| Ici nous exportons la classe AppComponent qui sera elle utilisé dans le fichier
| app.module.ts
|----------------------------------------------------------------------------------
*/

export class AppComponent {}
