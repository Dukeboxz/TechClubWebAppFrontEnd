import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeEditDeleteComponent } from './badge-edit-delete.component';

describe('BadgeEditDeleteComponent', () => {
  let component: BadgeEditDeleteComponent;
  let fixture: ComponentFixture<BadgeEditDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeEditDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeEditDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
