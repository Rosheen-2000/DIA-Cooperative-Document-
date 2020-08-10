import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyteamdocComponent } from './myteamdoc.component';

describe('MyteamdocComponent', () => {
  let component: MyteamdocComponent;
  let fixture: ComponentFixture<MyteamdocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyteamdocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyteamdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
