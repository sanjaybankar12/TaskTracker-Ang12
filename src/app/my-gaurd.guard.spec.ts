import { TestBed } from '@angular/core/testing';

import { MyGaurdGuard } from './my-gaurd.guard';

describe('MyGaurdGuard', () => {
  let guard: MyGaurdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MyGaurdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
