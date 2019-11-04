import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithFlatComponent } from './with-flat.component';

describe('WithFlatComponent', () => {
  let component: WithFlatComponent;
  let fixture: ComponentFixture<WithFlatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithFlatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
