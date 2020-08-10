import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MystardocComponent } from './mystardoc.component';

describe('MystardocComponent', () => {
  let component: MystardocComponent;
  let fixture: ComponentFixture<MystardocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MystardocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MystardocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
