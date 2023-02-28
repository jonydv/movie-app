import { Component, Input, SimpleChanges } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Movie } from 'src/app/interfaces/movie-data.interface';
import { MovieRequestService } from 'src/app/services/movie-request.service';
import { MoviesData } from '../../interfaces/movie-data.interface';
import { movieRequestType } from '../../constants/movie-request-type';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss'],
})
export class InfiniteScrollComponent {
  @Input() url: string = '';
  @Input() moviesData: MoviesData | null = null;
  @Input() movies: Movie[] = [];
  @Input() type: string = '';
  @Input() query: string = '';
  @Input() genre: string = '';
  @Input() fromTopRated: boolean = false;
  movies$: ReplaySubject<Movie[]> = new ReplaySubject<Movie[]>();
  initialPage: number = 1;
  totalPages: number = 1;
  totalResults: number = 0;
  distance: number = 3;
  throttle: number = 1000;
  loading: boolean = false;
  moviesChanged: MoviesData | null = null;
  notFound: string = 'We did not find movies, continue exploring the site...';
  constructor(private movieRequest: MovieRequestService) {}

  ngOnInit(): void {
    if (this.moviesData == null) {
      this.fetchMovieData(this.initialPage);
    } else {
      this.setComponentData(this.moviesData);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['moviesData']?.currentValue) {
      this.moviesChanged = changes['moviesData']?.currentValue;
      this.initialPage = 1;
      this.movies = [];
      this.setComponentData(this.moviesChanged!);
      window.scrollTo(0, 0);
    }
    if (
      changes['query']?.currentValue &&
      !changes['query']?.firstChange &&
      !changes['moviesData']?.currentValue
    ) {
      this.initialPage = 1;
      this.movies = [];
      this.setComponentData(this.moviesChanged!);
      window.scrollTo(0, 0);
    }
    if (
      (changes['genre']?.currentValue && !changes['genre']?.firstChange) ||
      (changes['genre'] && !changes['genre']?.firstChange && this.fromTopRated)
    ) {
      this.initialPage = 1;
      this.movies = [];
      this.fetchMovieData(this.initialPage);
      window.scrollTo(0, 0);
    }
    if (
      changes['type']?.currentValue &&
      !changes['type']?.firstChange &&
      !changes['genre']?.currentValue &&
      changes['type']?.currentValue !== movieRequestType.search
    ) {
      this.initialPage = 1;
      this.movies = [];
      this.fetchMovieData(this.initialPage);
    }
  }
  onScroll() {
    if (this.initialPage < this.totalPages && !this.loading) {
      this.loading = true;
      this.initialPage = this.initialPage + 1;
      this.fetchMovieData(this.initialPage);
    }
  }

  fetchMovieData(page: number) {
    this.movieRequest
      .getMovies(this.type, page, this.query, this.genre)!
      .subscribe((data) => {
        this.setComponentData(data);
      });
  }

  setComponentData(data: MoviesData) {
    this.totalPages = data?.total_pages;
    this.totalResults = data?.total_results;
    this.movies = [
      ...this.movies,
      ...data?.results?.filter((movie) => movie?.poster_path != null),
    ];
    this.movies$.next(this.movies);
    this.loading = false;
  }
  ngOnDestroy() {
    this.movies$.next([]);
  }
}
