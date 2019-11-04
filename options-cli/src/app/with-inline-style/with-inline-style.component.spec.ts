import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithInlineStyleComponent } from './with-inline-style.component';

describe('WithInlineStyleComponent', () => {
  let component: WithInlineStyleComponent;
  let fixture: ComponentFixture<WithInlineStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithInlineStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithInlineStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
