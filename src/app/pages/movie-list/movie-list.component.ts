import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { combineLatest, Observable, Subscription, map, tap } from 'rxjs';
import { MoviesData } from '../../interfaces/movie-data.interface';
import { SearchResultsPageService } from '../../services/search-results-page.service';
import { movieRequestType } from '../../constants/movie-request-type';
import { GenreService } from '../../services/genre.service';
import { Genre } from '../../interfaces/movie-detail.interface';
import { BreakpointService } from '../../services/breakpoint.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit, OnDestroy {
  fromSearch: boolean = false;
  resultsData$: Observable<MoviesData | null> =
    this.searchResultsPage.getSearchResults();
  queryParams$: Observable<Params> = this.activatedRoute.queryParams;
  moviesResults: MoviesData | null = null;
  searchTitle: string = '';
  movieResultsData$: Observable<MoviesData> | null = null;
  type: string = '';
  query: string = '';
  genre: string = '';
  title: string = '';
  subscription: Subscription = new Subscription();
  genres$: Observable<Genre[]> = this.genreService
    .getGenres()
    .pipe(map((data) => data?.genres));
  appliedGenres: string = '';
  filterByGenre: string = 'Filter by genre';
  expand: boolean = false;
  genreNames: string = '';
  isMobile$: Observable<boolean> = this.breakpointService.isMobile().pipe(
    tap((isMobile) => {
      this.expand = isMobile ? false : true;
    })
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private searchResultsPage: SearchResultsPageService,
    private genreService: GenreService,
    private breakpointService: BreakpointService
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getMovieInformation();
  }

  getMovieInformation() {
    this.subscription.add(
      combineLatest([this.queryParams$, this.resultsData$]).subscribe(
        ([params, results]) => {
          this.switchRequestByQueryParams(params, results!);
        }
      )
    );
  }

  switchRequestByQueryParams(params: Params, results: MoviesData) {
    switch (!!params) {
      case !!params['query']:
        this.query = params['query'];
        this.fromSearch = true;
        this.title = `Search results for: `;
        this.type = movieRequestType.search;
        this.moviesResults = results;
        this.appliedGenres = '';
        return;
      case !!params['genre']:
        this.genre = params['genre'];
        this.fromSearch = false;
        this.type = movieRequestType.genre;
        this.appliedGenres = params['genre'];
        this.title = `Filtered by: `;
        return;
      default:
        this.fromSearch = false;
        this.type = movieRequestType.nowPlaying;
        this.title = 'Now playing';
        this.appliedGenres = '';
        return;
    }
  }

  expandGenres(isMobile: boolean = false) {
    this.expand = !isMobile ? true : !this.expand;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
