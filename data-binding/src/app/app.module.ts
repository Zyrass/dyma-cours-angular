import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*
|----------------------------------------------------------------------------------
| Importation de Forms module pour le bon fonctionnement de [( NgModule )]
|----------------------------------------------------------------------------------
*/
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';

@NgModule({

  declarations: [
    AppComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayDataBindingComponent
  ],

  imports: [
    BrowserModule,
    FormsModule     // Je place le  FormsModule ici
  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }
