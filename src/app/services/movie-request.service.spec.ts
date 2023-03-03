import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MovieRequestService } from './movie-request.service';
import { SearchResultsPageService } from './search-results-page.service';
import { MovieRequestMockService } from './movie-request-mock.service';

describe('MovieRequestService', () => {
  let service: MovieRequestMockService;
  let httpTestingController: HttpTestingController;
  let searchService: SearchResultsPageService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        MovieRequestMockService,
        SearchResultsPageService,
        HttpTestingController,
      ],
    });
    service = TestBed.inject(MovieRequestMockService);
    searchService = TestBed.inject(SearchResultsPageService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
