/*
|----------------------------------------------------------------------------------
| MAIN.TS
|----------------------------------------------------------------------------------
| Main.ts va nous permettre de faire en sorte que nos navigateurs puissent
| interprêter nos "tags" qu'on aura créer de toute pièce grâce à nos composants.
| Aussi appelé (component).
|
| Le fichier main.ts est donc une brique indispensable au bon fonctionnement 
| de notre application.
|----------------------------------------------------------------------------------
*/

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/*
|----------------------------------------------------------------------------------
| AppModule correspond à la classe qui est elle exportée du fichier app.module.ts
|----------------------------------------------------------------------------------
*/
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

/*
|----------------------------------------------------------------------------------
| plateformBrowserDynamic().bootstrapModule(AppModule)
| permet de lancer l'application et donc nous passons la classe AppModule
|----------------------------------------------------------------------------------
*/
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
