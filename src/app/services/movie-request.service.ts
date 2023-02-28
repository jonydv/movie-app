import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MoviesData } from '../interfaces/movie-data.interface';
import { Observable, tap, share } from 'rxjs';
import { MovieDetail } from '../interfaces/movie-detail.interface';
import { SearchResultsPageService } from './search-results-page.service';
import { movieRequestType } from '../constants/movie-request-type';

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

  discoverMovies(page: number = 1): Observable<MoviesData> {
    let date = new Date(Date.now());

    let primaryReleaseDate = `${date.getFullYear()}-${this.convertMonthToString(
      date.getMonth()
    )}-01`;
    let maxPrimaryReleaseDate = `${date.getFullYear()}-12-31`;
    const url: string = `${environment.baseUrl}discover/movie?${environment.language}&region=US&sort_by=primary_release_date.asc,popularity.desc&page=${page}&primary_release_date.gte=${primaryReleaseDate}&primary_release_date.lte=${maxPrimaryReleaseDate}`;
    return this.http.get<MoviesData>(url);
  }

  getUpcoming(page: number = 1): Observable<MoviesData> {
    const url: string = `${environment.baseUrl}/movie/upcoming?${environment.language}&page=${page}&region=US`;
    return this.http.get<MoviesData>(url);
  }

  getNowPlaying(page: number = 1): Observable<MoviesData> {
    const url: string = `${environment.baseUrl}/movie/now_playing?${environment.language}&page=${page}&region=US`;
    return this.http.get<MoviesData>(url);
  }

  getTopRatedMovies(
    page: number = 1,
    genres: string = ''
  ): Observable<MoviesData> {
    const url: string = `${environment.baseUrl}/movie/top_rated?${
      environment.language
    }&page=${page}&region=US${
      genres.length > 0 ? '&with_genres=' + genres : ''
    }`;
    return this.http.get<MoviesData>(url);
  }

  getMovieDetails(id: string): Observable<MovieDetail> {
    const url: string = `${environment.baseUrl}/movie/${id}?${environment.language}&region=US&append_to_response=videos,recommendations,credits,reviews`;
    return this.http.get<MovieDetail>(url);
  }
  getSearchResult(query: string, page: number = 1): Observable<MoviesData> {
    const url: string = `${environment.baseUrl}/search/movie?query=${query}&page=${page}`;
    return this.http.get<MoviesData>(url).pipe(
      tap((data) => this.searchResults.setSearchResults(data)),
      share()
    );
  }

  getMoviesByGenre(genreId: string, page: number = 1) {
    const url: string = `${environment.baseUrl}discover/movie?${environment.language}&region=US&sort_by=popularity.desc&page=${page}&with_genres=${genreId}`;
    return this.http.get<MoviesData>(url);
  }

  convertMonthToString(month: number): string {
    return (month + 1).toString().padStart(2, '0');
  }

  getMovies(
    type: string,
    page: number = 1,
    query: string = '',
    genre: string = ''
  ): Observable<MoviesData> | null {
    switch (type) {
      case (type = movieRequestType.search):
        return this.getSearchResult(query, page);
      case (type = movieRequestType.upcoming):
        return this.getUpcoming(page);
      case (type = movieRequestType.nowPlaying):
        return this.getNowPlaying(page);
      case (type = movieRequestType.topRated):
        return this.getTopRatedMovies(page, genre);
      case (type = movieRequestType.genre):
        return this.getMoviesByGenre(genre, page);
      default:
        return null;
    }
  }
}
