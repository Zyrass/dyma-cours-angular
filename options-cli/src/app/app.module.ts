import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WithoutOptionsComponent } from './without-options/without-options.component';
import { WithFlatComponent } from './with-flat.component';
import { WithInlineStyleComponent } from './with-inline-style/with-inline-style.component';
import { WithInlineTemplateComponent } from './with-inline-template/with-inline-template.component';

@NgModule({
  declarations: [
    AppComponent,
    WithoutOptionsComponent,
    WithFlatComponent,
    WithInlineStyleComponent,
    WithInlineTemplateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
