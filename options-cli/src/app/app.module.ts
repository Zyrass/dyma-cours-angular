import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/*
|----------------------------------------------------------------------------------
| J'importe ici toutes les classes qui ont été générées via le CLI :
|----------------------------------------------------------------------------------
*/

/*
|----------------------------------------------------------------------------------
|   - Dans le terminal : ng generate component without-options
|   - Ma classe généré : WithoutOptionsComponent
|----------------------------------------------------------------------------------
*/
import { WithoutOptionsComponent } from './without-options/without-options.component';

/*
|----------------------------------------------------------------------------------
|   - Dans le terminal : ng generate component with-flat
|   - Ma classe généré : WithFlatComponent
|----------------------------------------------------------------------------------
*/
import { WithFlatComponent } from './with-flat.component';

/*
|----------------------------------------------------------------------------------
|   - Dans le terminal : ng generate component with-inlinestyle
|   - Ma classe généré : WithInlineStyleComponent
|----------------------------------------------------------------------------------
*/
import { WithInlineStyleComponent } from './with-inline-style/with-inline-style.component';

/*
|----------------------------------------------------------------------------------
|   - Dans le terminal : ng generate component with-inlinetemplate
|   - Ma classe généré : WithInlineTemplateComponent
|----------------------------------------------------------------------------------
*/
import { WithInlineTemplateComponent } from './with-inline-template/with-inline-template.component';

/*
|----------------------------------------------------------------------------------
|   - Dans le terminal : ng generate component without-test-file
|   - Ma classe généré : WithoutTestFileComponent
|----------------------------------------------------------------------------------
*/
import { WithoutTestFileComponent } from './without-test-file/without-test-file.component';

@NgModule({
  declarations: [
    AppComponent,
    WithoutOptionsComponent,
    WithFlatComponent,
    WithInlineStyleComponent,
    WithInlineTemplateComponent,
    WithoutTestFileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
