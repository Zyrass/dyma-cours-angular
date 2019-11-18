import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// A commenter si on utilise pas le double data-binding
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemChildComponent } from './item-child/item-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Également a commenter si on utilise pas le double data-binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

