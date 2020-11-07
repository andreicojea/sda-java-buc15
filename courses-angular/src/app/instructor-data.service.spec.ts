import { TestBed } from '@angular/core/testing';

import { InstructorDataService } from './instructor-data.service';

describe('InstructorDataService', () => {
  let service: InstructorDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstructorDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
