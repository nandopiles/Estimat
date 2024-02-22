import { TestBed } from '@angular/core/testing';

import { EstimatService } from './estimat.service';

describe('EstimatService', () => {
  let service: EstimatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstimatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
