import { TestBed } from '@angular/core/testing';

import { EmployeeDBService } from './employee-db.service';

describe('EmployeeDBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeDBService = TestBed.get(EmployeeDBService);
    expect(service).toBeTruthy();
  });
});
