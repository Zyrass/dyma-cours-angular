import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styles: [`
    table {
      margin: 20px auto;
    }
    thead tr th,
    tbody tr td {
      padding: 5px 20px;
      border: 1px solid black;
    }
  `]
})
export class NgForComponent implements OnInit {

  public club_OL: Array< {
    number: number,
    nationality: string,
    lastname: string,
    firstname: string,
    position: string
  } > = [];

  constructor() {
    
    this.club_OL.push({
      number: 1,
      nationality: "PORTUGAL",
      lastname: "LOPES",
      firstname: "Anthony",
      position: "Gardien"
    });

    this.club_OL.push({
      number: 4,
      nationality: "BRAZIL",
      lastname: "DA SILVA",
      firstname: "Rafael",
      position: "Defenseur"
    });

    this.club_OL.push({
      number: 8,
      nationality: "FRANCE",
      lastname: "HOUSSEM",
      firstname: "Aouar",
      position: "Milieu"
    });

    this.club_OL.push({
      number: 11,
      nationality: "PAYS-BAS",
      lastname: "DEPAY",
      firstname: "Memphis",
      position: "Attaquant"
    });

  }

  ngOnInit() {
    
  }

}
