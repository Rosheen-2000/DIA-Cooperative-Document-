import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindbackComponent } from './findback.component';

describe('FindbackComponent', () => {
  let component: FindbackComponent;
  let fixture: ComponentFixture<FindbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
