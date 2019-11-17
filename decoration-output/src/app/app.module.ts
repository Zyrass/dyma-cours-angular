import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ItemChildComponent } from './item-child/item-child.component';
@NgModule({
  declarations: [ AppComponent, ItemChildComponent ],
  imports: [ 
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }