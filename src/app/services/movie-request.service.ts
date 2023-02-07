import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Movie, MoviesData } from '../interfaces/movie-data.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieRequestService {
  constructor(private http: HttpClient) {}

  getPopular(page: number = 1): Observable<MoviesData> {
    const url: string = `${environment.baseUrl}/movie/popular?${environment.language}&page=${page}`;
    return this.http.get<MoviesData>(url);
  }

  getUpcoming(page: number = 1): Observable<MoviesData> {
    const url: string = `${environment.baseUrl}/movie/upcoming?${environment.language}&page=${page}`;
    return this.http.get<MoviesData>(url);
  }

  getNowPlaying(page: number = 1): Observable<MoviesData> {
    const url: string = `${environment.baseUrl}/movie/now_playing?${environment.language}&page=${page}`;
    return this.http.get<MoviesData>(url);
  }

  getTopRatedMovies(page: number = 1): Observable<MoviesData> {
    const url: string = `${environment.baseUrl}/movie/top_rated?${environment.language}&page=${page}`;
    return this.http.get<MoviesData>(url);
  }

  getMovieDetails(id: string): Observable<Movie> {
    const url: string = `${environment.baseUrl}/movie/${id}?${environment.language}&append_to_response=videos`;
    return this.http.get<Movie>(url);
  }
  getSearchResult() {}
}
