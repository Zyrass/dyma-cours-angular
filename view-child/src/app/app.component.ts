import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // Pour la navigation + le titre de la page
  public chapter: number = 4;
  public lesson: number = 6
  public title: string = "View-Child"

  public newMovie: string;
  public tabMovies: string[] = [];
  @ViewChild('myMovie', {static : true}) public el: ElementRef;

  /**
   * ------------------------------------------------------------------------
   * Avec les références nous aurions comme méthode :
   * ------------------------------------------------------------------------
   * addMovie(reference: any) {
   *  this.tabMovies.push(reference.value);
   * }
   * ------------------------------------------------------------------------
   */
  
  // Avec ViewChild
  addMovie() {
    this.tabMovies.push(this.el.nativeElement.value);
  }

  deleteThisMovie(stringParameter: any) {
    this.tabMovies.splice(this.tabMovies.indexOf(stringParameter), 1)
  }

}
