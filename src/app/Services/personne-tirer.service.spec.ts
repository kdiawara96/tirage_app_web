import { TestBed } from '@angular/core/testing';

import { PersonneTirerService } from './personne-tirer.service';

describe('PersonneTirerService', () => {
  let service: PersonneTirerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonneTirerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
