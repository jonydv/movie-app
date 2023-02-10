import { TestBed } from '@angular/core/testing';

import { SearchResultsPageService } from './search-results-page.service';

describe('SearchResultsPageService', () => {
  let service: SearchResultsPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchResultsPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
