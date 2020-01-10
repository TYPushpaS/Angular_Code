import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateSchedulingComponent } from './candidate-scheduling.component';

describe('CandidateSchedulingComponent', () => {
  let component: CandidateSchedulingComponent;
  let fixture: ComponentFixture<CandidateSchedulingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateSchedulingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateSchedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
