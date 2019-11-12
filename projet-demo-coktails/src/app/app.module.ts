import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoktailListComponent } from './coktail-list/coktail-list.component';
import { CoktailsListComponent } from './coktails-list/coktails-list.component';
import { CoktailsDetailsComponent } from './coktails-details/coktails-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoktailListComponent,
    CoktailsListComponent,
    CoktailsDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
