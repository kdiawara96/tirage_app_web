import { TestBed } from '@angular/core/testing';

import { TirageFaitSurListeService } from './tirage-fait-sur-liste.service';

describe('TirageFaitSurListeService', () => {
  let service: TirageFaitSurListeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TirageFaitSurListeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
