import { TestBed } from '@angular/core/testing';

import { CancerService } from './cancer.service';

describe('CancerService', () => {
  let service: CancerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CancerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
