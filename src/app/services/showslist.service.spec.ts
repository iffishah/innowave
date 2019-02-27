import { TestBed } from '@angular/core/testing';

import { ShowslistService } from './showslist.service';

describe('ShowslistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowslistService = TestBed.get(ShowslistService);
    expect(service).toBeTruthy();
  });
});
