import { Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../../interfaces/movie-data.interface';
import { MovieRequestService } from '../../services/movie-request.service';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.scss'],
})
export class UpcomingMoviesComponent {
  url: string = `${environment.baseUrl}/movie/upcoming?${environment.language}`;
  movies: Movie[] = [];
  movies$: ReplaySubject<Movie[]> = new ReplaySubject<Movie[]>();
  initialPage: number = 1;
  totalPages: number = 1;
  totalResults: number = 0;
  distance: number = 3;
  throttle: number = 1000;
  loading: boolean = false;
  constructor(private movieRequest: MovieRequestService) {
    this.fetchMovieData(this.initialPage);
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
      this.totalPages = data.total_pages;
      this.totalResults = data.total_results;
      this.movies = [
        ...this.movies,
        ...data.results.filter((movie) => movie.poster_path != null),
      ];
      this.movies$.next(this.movies);
      this.loading = false;
    });
  }
  // const newMovies = useFetch(`${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=1`);

  // const popularMovies = useFetch(`${URL_API}/movie/popular?api_key=${API}&language=es-ES&page=1`);

  // const topRatedMovies = useFetch(`${URL_API}/movie/top_rated?api_key=${API}&language=es-ES&page=1`);
}
