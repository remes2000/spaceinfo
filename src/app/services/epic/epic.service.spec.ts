import { TestBed } from '@angular/core/testing';

import { EpicService } from './epic.service';

describe('EpicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EpicService = TestBed.get(EpicService);
    expect(service).toBeTruthy();
  });
});
