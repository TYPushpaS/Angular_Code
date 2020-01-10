import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallInterviewComponent } from './getall-interview.component';

describe('GetallInterviewComponent', () => {
  let component: GetallInterviewComponent;
  let fixture: ComponentFixture<GetallInterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetallInterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
