import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeammemberComponent } from './teammember.component';

describe('TeammemberComponent', () => {
  let component: TeammemberComponent;
  let fixture: ComponentFixture<TeammemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeammemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeammemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
