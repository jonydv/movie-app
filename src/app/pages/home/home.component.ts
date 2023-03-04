import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { MovieRequestService } from '../../services/movie-request.service';
import { BreakpointService } from '../../services/breakpoint.service';
import { Movie, MoviesData } from '../../interfaces/movie-data.interface';
import { Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isMobile$: Observable<boolean> = this.breakpointService.isMobile();
  topRatedTotalPages: number = 500;
  nowPlayingTotalPages: number = 12;
  requestTopRatedPage: number = this.aleatoryPageRequest(
    this.topRatedTotalPages
  );
  requestNowPlayingPage: number = this.aleatoryPageRequest(
    this.nowPlayingTotalPages
  );
  nowPlayingMovies$: Observable<Movie[]> = this.movieRequestService
    // .getNowPlaying(this.requestNowPlayingPage) sometimes get movies with the backdrop_path in null (TODO fix it and make another call to the api)
    .getNowPlaying()
    .pipe(map((data) => this.filterMoviesWithoutPosterPath(data, true)));
  upcomingMovies$: Observable<Movie[]> = this.movieRequestService
    .getUpcoming()
    .pipe(map((data) => this.filterMoviesWithoutPosterPath(data)));
  topRatedMovies$: Observable<Movie[]> = this.movieRequestService
    .getTopRatedMovies(this.requestTopRatedPage)
    .pipe(map((data) => this.filterMoviesWithoutPosterPath(data)));
  upcomingTitle: string = 'Upcoming movies';
  upcomingSubtitle: string = 'Latest movies upcoming';
  upcomingLink: string = '/upcoming';
  upcomingLinkTitle: string = 'See all ';

  topRatedTitle: string = 'Top rated movies';
  topRatedLink: string = '/movies';
  topRatedQueryParams: Params = { toprated: true };
  topRatedLinkTitle: string = 'See all ';
  constructor(
    private movieRequestService: MovieRequestService,
    private breakpointService: BreakpointService
  ) {}

  ngOnInit(): void {
    //window.scrollTo(0, 0);
  }

  aleatoryPageRequest(totalPages: number): number {
    return Math.floor(Math.random() * totalPages) + 1;
  }

  filterMoviesWithoutPosterPath(
    data: MoviesData,
    filterBackdrop: boolean = false
  ): Movie[] {
    return data.results.filter((movie: Movie) =>
      filterBackdrop ? movie.backdrop_path != null : movie.poster_path != null
    );
  }
}
