/*
|----------------------------------------------------------------------------------
| APP.MODULE.TS
|----------------------------------------------------------------------------------
| Le fichier app.module.ts permet de lié le fichier app.component.ts
| Une fois lié, nous exportons à la fin la classe dans le fichier main.ts
|----------------------------------------------------------------------------------
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


/*
|----------------------------------------------------------------------------------
| Ici j'importe la classe AppComponent du fichier app/app.component.ts
|----------------------------------------------------------------------------------
*/
import { AppComponent } from './app.component';


/*
|----------------------------------------------------------------------------------
| Déclaration d'une décoration ici : @NgModule
|----------------------------------------------------------------------------------
*/
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Chargement d'un component. (ici un seul est chargé) 
})

/*
|----------------------------------------------------------------------------------
| Ici nous exportons AppModule qui sera lui utilisé dans le fichier main.ts
|----------------------------------------------------------------------------------
*/
export class AppModule { }
