import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CocktailsContainerComponent } from './cocktails-container/cocktails-container.component';
import { CocktailsDetailsComponent } from './cocktails-container/cocktails-details/cocktails-details.component';
import { CocktailsListComponent } from './cocktails-container/cocktails-list/cocktails-list.component';

// Importation de ma directive
import { ActiveDirective } from './shared/directives/active.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CocktailsContainerComponent,
    CocktailsDetailsComponent,
    CocktailsListComponent,
    ActiveDirective // Implémentation de ma class ActiveDirective précédemment importé.
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
