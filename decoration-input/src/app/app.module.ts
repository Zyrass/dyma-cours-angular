import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Pour utiliser le double data-binding sur l'input
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstChildComponent } from './first-child/first-child.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstChildComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
