import { TestBed } from '@angular/core/testing';

import { HalqahService } from './halqah.service';

describe('HalqahService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HalqahService = TestBed.get(HalqahService);
    expect(service).toBeTruthy();
  });
});
