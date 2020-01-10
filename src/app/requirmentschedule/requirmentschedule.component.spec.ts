import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirmentscheduleComponent } from './requirmentschedule.component';

describe('RequirmentscheduleComponent', () => {
  let component: RequirmentscheduleComponent;
  let fixture: ComponentFixture<RequirmentscheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequirmentscheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirmentscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
