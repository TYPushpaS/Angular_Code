import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateCreationComponent } from './candidate-creation.component';

describe('CandidateCreationComponent', () => {
  let component: CandidateCreationComponent;
  let fixture: ComponentFixture<CandidateCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
