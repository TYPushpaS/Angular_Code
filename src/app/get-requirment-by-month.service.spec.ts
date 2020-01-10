import { TestBed } from '@angular/core/testing';

import { GetRequirmentByMonthService } from './get-requirment-by-month.service';

describe('GetRequirmentByMonthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetRequirmentByMonthService = TestBed.get(GetRequirmentByMonthService);
    expect(service).toBeTruthy();
  });
});
