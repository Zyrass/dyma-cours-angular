import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/*
|----------------------------------------------------------------------------------
| Ici j'importe ma classe nouvellement créé avec le CLI grâce à la commande :
|   - ng generate component new-cli
|
| Situé  dans le fichier :
|   - NewCliComponent issu du fichier app/new-cli/new-cli.component.ts
|----------------------------------------------------------------------------------
*/
import { NewCliComponent } from './new-cli/new-cli.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCliComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
