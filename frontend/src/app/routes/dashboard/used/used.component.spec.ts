import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedComponent } from './used.component';

describe('UsedComponent', () => {
  let component: UsedComponent;
  let fixture: ComponentFixture<UsedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
