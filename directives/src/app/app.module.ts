import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgIfComponent } from './ng-if/ng-if.component';

@NgModule({

  declarations: [
    AppComponent,
    NgStyleComponent,
    NgClassComponent,
    NgIfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})

export class AppModule { }
