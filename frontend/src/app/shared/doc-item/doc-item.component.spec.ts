import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocItemComponent } from './doc-item.component';

describe('DocItemComponent', () => {
  let component: DocItemComponent;
  let fixture: ComponentFixture<DocItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
