import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentdeleteComponent } from './recentdelete.component';

describe('RecentdeleteComponent', () => {
  let component: RecentdeleteComponent;
  let fixture: ComponentFixture<RecentdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentdeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
