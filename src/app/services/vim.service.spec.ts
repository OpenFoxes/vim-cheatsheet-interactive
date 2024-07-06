import { TestBed } from '@angular/core/testing';

import { VimService } from './vim.service';

describe('VimService', () => {
  let service: VimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
