import { TestBed } from '@angular/core/testing';

import { TotalTirageService } from './total-tirage.service';

describe('TotalTirageService', () => {
  let service: TotalTirageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalTirageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
