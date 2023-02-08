import { Component } from '@angular/core';
import { of, Observable, map, tap } from 'rxjs';
import { MovieRequestService } from '../../services/movie-request.service';
import { BreakpointService } from '../../services/breakpoint.service';
import { Movie } from '../../interfaces/movie-data.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  isMobile$: Observable<boolean> = this.breakpointService.isMobile();
  topRatedTotalPages: number = 500;
  requestTopRatedPage: number =
    Math.floor(Math.random() * this.topRatedTotalPages) + 1;
  nowPlayingMovies$: Observable<Movie[]> = this.movieRequestService
    .getNowPlaying()
    .pipe(
      map((data) => data.results.filter((movie) => movie.poster_path != null))
    );
  upcomingMovies$: Observable<Movie[]> = this.movieRequestService
    .getUpcoming()
    .pipe(
      map((data) => data.results.filter((movie) => movie.poster_path != null))
    );
  topRatedMovies$: Observable<Movie[]> = this.movieRequestService
    .getTopRatedMovies(this.requestTopRatedPage)
    .pipe(
      map((data) => data.results.filter((movie) => movie?.poster_path != null))
    );
  upcomingTitle: string = 'Upcoming movies';
  upcomingSubtitle: string = 'Latest movies upcoming';
  upcomingLink: string = '/upcoming';
  upcomingLinkTitle: string = 'See all ';

  topRatedTitle: string = 'Top rated movies';
  topRatedLink: string = '/top-rated';
  topRatedLinkTitle: string = 'See all ';
  constructor(
    private movieRequestService: MovieRequestService,
    private breakpointService: BreakpointService
  ) {}
}
