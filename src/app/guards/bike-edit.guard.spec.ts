import { TestBed } from '@angular/core/testing';

import { BikeEditGuard } from './bike-edit.guard';

describe('BikeEditGuard', () => {
  let guard: BikeEditGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BikeEditGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
