import { TestBed } from '@angular/core/testing';

import { UserCoreService } from './user-core.service';

describe('UserCoreService', () => {
  let service: UserCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
