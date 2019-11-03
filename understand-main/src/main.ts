/*
|----------------------------------------------------------------------------------
| MAIN.TS
|----------------------------------------------------------------------------------
| Tout passe par ce fichier afin de pouvoir faire fonctionner nôtre application.
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
