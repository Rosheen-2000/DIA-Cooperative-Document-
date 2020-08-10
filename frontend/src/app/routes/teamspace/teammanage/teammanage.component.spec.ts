import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeammanageComponent } from './teammanage.component';

describe('TeammanageComponent', () => {
  let component: TeammanageComponent;
  let fixture: ComponentFixture<TeammanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeammanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeammanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
