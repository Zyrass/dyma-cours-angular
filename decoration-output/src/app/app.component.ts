import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public parentLanguage: string;
  public parentLanguageTable: string[] = [];
  deleteLanguage(myParameter) {
    this.parentLanguageTable.splice(
      this.parentLanguageTable.indexOf(myParameter), 1
    );
  }
}
