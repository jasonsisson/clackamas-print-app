import { TestBed } from '@angular/core/testing';

import { GetRecentPostsService } from './get-recent-posts.service';

describe('GetRecentPostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetRecentPostsService = TestBed.get(GetRecentPostsService);
    expect(service).toBeTruthy();
  });
});
