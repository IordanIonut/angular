import { TestBed } from '@angular/core/testing';

import { AssertService } from './assert.service';

describe('AssertService', () => {
  let service: AssertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssertService);
  });

  it('should be created', () => {
  });
});
