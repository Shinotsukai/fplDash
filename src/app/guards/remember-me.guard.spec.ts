import { TestBed } from '@angular/core/testing';

import { RememberMeGuard } from './remember-me.guard';

describe('RememberMeGuard', () => {
  let guard: RememberMeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RememberMeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
