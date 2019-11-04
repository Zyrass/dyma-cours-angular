import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-with-inline-template',
  template: `
    <h1>ng generate component with-inlinetemplate --inlineTemplate=true</h1>
    <hr />
    <p>
      with-inline-template works!
    </p>
  `,
  styleUrls: ['./with-inline-template.component.css']
})
export class WithInlineTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
