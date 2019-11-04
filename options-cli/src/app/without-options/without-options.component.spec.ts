import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutOptionsComponent } from './without-options.component';

describe('WithoutOptionsComponent', () => {
  let component: WithoutOptionsComponent;
  let fixture: ComponentFixture<WithoutOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithoutOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithoutOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
