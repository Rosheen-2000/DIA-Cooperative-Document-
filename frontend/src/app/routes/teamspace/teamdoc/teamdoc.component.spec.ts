import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamdocComponent } from './teamdoc.component';

describe('TeamdocComponent', () => {
  let component: TeamdocComponent;
  let fixture: ComponentFixture<TeamdocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamdocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
