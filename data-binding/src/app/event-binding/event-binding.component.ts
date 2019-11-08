import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})

export class EventBindingComponent {

  /*
  |----------------------------------------------------------------------------------
  | Définition de ma variable qui sera interpolée
  |----------------------------------------------------------------------------------
  */
  public myBackgroundColor: string = "lightgrey" // Couleur par défaut

  /*
  |----------------------------------------------------------------------------------
  | Méthode qui définit le changement de couleur du paragraphe.
  |----------------------------------------------------------------------------------
  | Avec 2 paramètres :
  |   1 - paramColor de type "string" définit la couleur du fond du paragraphe
  |   2 - event de type "event" permet de connaitre le type utilisé
  |----------------------------------------------------------------------------------
  */
  changeTheBackgroundColor(paramColor: string, event:Event): void {

    this.myBackgroundColor = paramColor;
    console.log(paramColor + " avec le type event : " + event.type);

  }

}
