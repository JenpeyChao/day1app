import { TestBed } from '@angular/core/testing';

import { DemolistService } from './demolist.service';

describe('DemolistService', () => {
  let service: DemolistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemolistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
