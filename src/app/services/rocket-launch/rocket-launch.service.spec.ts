import { TestBed } from '@angular/core/testing';

import { RocketLaunchService } from './rocket-launch.service';

describe('RocketLaunchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RocketLaunchService = TestBed.get(RocketLaunchService);
    expect(service).toBeTruthy();
  });
});
