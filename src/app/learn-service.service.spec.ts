import { TestBed } from '@angular/core/testing';

import { LearnServiceService } from './learn-service.service';

describe('LearnServiceService', () => {
  let service: LearnServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LearnServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
