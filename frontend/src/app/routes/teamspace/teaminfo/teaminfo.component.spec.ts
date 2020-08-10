import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaminfoComponent } from './teaminfo.component';

describe('TeaminfoComponent', () => {
  let component: TeaminfoComponent;
  let fixture: ComponentFixture<TeaminfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaminfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaminfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
