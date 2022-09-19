import { TestBed } from '@angular/core/testing';

import { TotalListeService } from './total-liste.service';

describe('TotalListeService', () => {
  let service: TotalListeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalListeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
