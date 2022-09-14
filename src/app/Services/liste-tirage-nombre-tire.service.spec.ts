import { TestBed } from '@angular/core/testing';

import { LIsteTirageNombreTireService } from './liste-tirage-nombre-tire.service';

describe('LIsteTirageNombreTireService', () => {
  let service: LIsteTirageNombreTireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LIsteTirageNombreTireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
