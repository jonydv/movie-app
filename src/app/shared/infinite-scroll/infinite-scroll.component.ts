import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/scrolling';
import { takeUntil } from 'rxjs/operators';
import { ReplaySubject, Subject } from 'rxjs';
import { Movie } from 'src/app/interfaces/movie-data.interface';
import { environment } from 'src/environments/environment';
import { MovieRequestService } from 'src/app/services/movie-request.service';
import { MoviesData } from '../../interfaces/movie-data.interface';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss'],
})
export class InfiniteScrollComponent {
  @Input() url: string = '';
  @Input() movies: Movie[] = [];
  @Input() moviesData: MoviesData | null = null;
  movies$: ReplaySubject<Movie[]> = new ReplaySubject<Movie[]>();
  initialPage: number = 1;
  totalPages: number = 1;
  totalResults: number = 0;
  distance: number = 3;
  throttle: number = 1000;
  loading: boolean = false;

  constructor(private movieRequest: MovieRequestService) {
    if (this.moviesData == null) {
      this.fetchMovieData(this.initialPage);
    } else {
      this.setComponentData(this.moviesData);
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
    this.movieRequest.getUpcoming(page).subscribe((data) => {
      this.setComponentData(data);
    });
  }

  setComponentData(data: MoviesData) {
    this.totalPages = data.total_pages;
    this.totalResults = data.total_results;
    this.movies = [
      ...this.movies,
      ...data.results.filter((movie) => movie.poster_path != null),
    ];
    this.movies$.next(this.movies);
    this.loading = false;
  }
  ngOnDestroy() {}
}
