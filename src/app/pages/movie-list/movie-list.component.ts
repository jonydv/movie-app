import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable, map, tap } from 'rxjs';
import { MoviesData } from '../../interfaces/movie-data.interface';
import { SearchResultsPageService } from '../../services/search-results-page.service';
import { MovieRequestService } from '../../services/movie-request.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent {
  fromSearch: boolean = false;
  resultsData$: Observable<MoviesData | null> =
    this.searchResultsPage.getSearchResults();
  moviesResults: MoviesData | null = null;
  searchTitle: string = '';
  movieResultsData$: Observable<MoviesData> | null = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private searchResultsPage: SearchResultsPageService,
    private movieRequest: MovieRequestService
  ) {
    combineLatest([this.activatedRoute.queryParams, this.resultsData$])
      .pipe(
        tap(([params, results]) => {
          const query = params['query'];
          if (query) {
            this.fromSearch = true;
            this.searchTitle = `Search results for: ${query}`;
          } else {
            this.fromSearch = false;
          }
          console.log(results);
          this.moviesResults = results;
          if (results == null) {
            this.movieResultsData$ = this.movieRequest.getSearchResult(
              params['query']
            );
          }
        })
      )
      .subscribe();
  }
}
