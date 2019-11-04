import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/*
|----------------------------------------------------------------------------------
| Située dans le fichier "new-cli.component.ts" du répertoire "app/new-cli/"
| j'importe ma classe nouvellement créé avec le CLI grâce à la commande :
|
|   - Dans le terminal : ng generate component new-cli
|   - Ma classe généré : NewCliComponent
|----------------------------------------------------------------------------------
*/
import { NewCliComponent } from './new-cli/new-cli.component';

/*
|----------------------------------------------------------------------------------
| Située dans le fichier "new-by-hand.component.ts" du répertoire "app/new-by-hand/"
| j'importe également ma nouvelle classe créé à la main sans le CLI :
|
|   - Ma classe généré : NewByHandComponent
|----------------------------------------------------------------------------------
*/
import { NewByHandComponent } from './new-by-hand/new-by-hand.component';

/*
|----------------------------------------------------------------------------------
| Située dans le fichier "dyma-premier-component.component.ts" 
| du répertoire "app/dyma-premier-component/" j'importe également ma nouvelle 
| classe créé à la main sans le CLI :
|
|   - Ma classe généré : DymaPremierComponent
|----------------------------------------------------------------------------------
*/
import { DymaPremierComponent } from './dyma-premier-component/dyma-premier-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCliComponent,      // Classe du fichier : new-cli.component.ts
    NewByHandComponent,   // Classe du fichier : new-by-hand.component.ts
    DymaPremierComponent  // Classe du fichier : dyma-premier-component.component.ts
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
