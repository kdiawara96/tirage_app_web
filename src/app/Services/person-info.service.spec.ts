import { TestBed } from '@angular/core/testing';

import { PersonInfoService } from './person-info.service';

describe('PersonInfoService', () => {
  let service: PersonInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
