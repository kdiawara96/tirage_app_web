import { TestBed } from '@angular/core/testing';

import { ChargementPageService } from './chargement-page.service';

describe('ChargementPageService', () => {
  let service: ChargementPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChargementPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
