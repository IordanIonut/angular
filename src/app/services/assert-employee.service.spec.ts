import { TestBed } from '@angular/core/testing';

import { AssertEmployeeService } from './assert-employee.service';

describe('AssertEmployeeService', () => {
  let service: AssertEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssertEmployeeService);
  });

  it('should be created', () => {
  });
});
