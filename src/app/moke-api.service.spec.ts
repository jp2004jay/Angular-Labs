import { TestBed } from '@angular/core/testing';

import { MokeApiService } from './moke-api.service';

describe('MokeApiService', () => {
  let service: MokeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MokeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
