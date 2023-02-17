import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MoviesData } from '../interfaces/movie-data.interface';
import { Observable, tap } from 'rxjs';
import { MovieDetail } from '../interfaces/movie-detail.interface';
import { SearchResultsPageService } from './search-results-page.service';

@Injectable({
  providedIn: 'root',
})
export class MovieRequestService {
  constructor(
    private http: HttpClient,
    private searchResults: SearchResultsPageService
  ) {}

  getPopular(page: number = 1): Observable<MoviesData> {
    const url: string = `${environment.baseUrl}/movie/popular?${environment.language}&page=${page}&region=US`;
    return this.http.get<MoviesData>(url);
  }

  getUpcoming(page: number = 1): Observable<MoviesData> {
    let date = new Date(Date.now());

    let primaryReleaseDate = `${date.getFullYear()}-${this.convertMonthToString(
      date.getMonth()
    )}-01`;
    let maxPrimaryReleaseDate = `${date.getFullYear()}-12-31`;
    const url: string = `${environment.baseUrl}discover/movie?${environment.language}&region=US&sort_by=primary_release_date.asc,popularity.desc&page=${page}&primary_release_date.gte=${primaryReleaseDate}&primary_release_date.lte=${maxPrimaryReleaseDate}`;
    return this.http.get<MoviesData>(url);
  }

  getNowPlaying(page: number = 1): Observable<MoviesData> {
    const url: string = `${environment.baseUrl}/movie/now_playing?${environment.language}&page=${page}&region=US`;
    return this.http.get<MoviesData>(url);
  }

  getTopRatedMovies(page: number = 1): Observable<MoviesData> {
    const url: string = `${environment.baseUrl}/movie/top_rated?${environment.language}&page=${page}&region=US`;
    return this.http.get<MoviesData>(url);
  }

  getMovieDetails(id: string): Observable<MovieDetail> {
    const url: string = `${environment.baseUrl}/movie/${id}?${environment.language}&region=US&append_to_response=videos,recommendations,credits,reviews`;
    return this.http.get<MovieDetail>(url);
  }
  getSearchResult(query: string): Observable<MoviesData> {
    const url: string = `${environment.baseUrl}/search/movie?query=${query}`;
    return this.http.get<MoviesData>(url).pipe(
      tap((data) => this.searchResults.setSearchResults(data)),
      tap(console.log)
    );
  }

  convertMonthToString(month: number): string {
    return (month + 1).toString().padStart(2, '0');
  }
}
