import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithInlineTemplateComponent } from './with-inline-template.component';

describe('WithInlineTemplateComponent', () => {
  let component: WithInlineTemplateComponent;
  let fixture: ComponentFixture<WithInlineTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithInlineTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithInlineTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
