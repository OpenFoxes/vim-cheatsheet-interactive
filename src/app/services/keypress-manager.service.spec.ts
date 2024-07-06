import { TestBed } from '@angular/core/testing';

import { KeypressManagerService } from './keypress-manager.service';

describe('KeyPressManagerService', () => {
  let service: KeypressManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeypressManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
