import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamspaceComponent } from './teamspace.component';

describe('TeamspaceComponent', () => {
  let component: TeamspaceComponent;
  let fixture: ComponentFixture<TeamspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
