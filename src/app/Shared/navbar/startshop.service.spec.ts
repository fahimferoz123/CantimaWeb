import { TestBed } from '@angular/core/testing';

import { StartshopService } from './startshop.service';

describe('StartshopService', () => {
  let service: StartshopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartshopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
