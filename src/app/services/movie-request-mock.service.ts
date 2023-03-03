import { Observable, of } from 'rxjs';
import { MoviesData, Movie } from '../interfaces/movie-data.interface';
import {
  MovieDetail,
  OriginalLanguage,
  OriginCountry,
} from '../interfaces/movie-detail.interface';

export const movieMock: Movie = {
  adult: false,
  backdrop_path: '',
  genre_ids: [1, 2],
  id: 1,
  original_language: 'en',
  original_title: 'Movie Title',
  overview: 'Movie Overview',
  popularity: 10,
  poster_path: '',
  release_date: new Date(),
  title: 'Movie Title',
  video: false,
  vote_average: 5,
  vote_count: 100,
  runtime: '120',
};

export const moviesMock: MoviesData = {
  dates: {
    maximum: new Date(),
    minimum: new Date(),
  },
  page: 1,
  results: [movieMock],
  total_pages: 1,
  total_results: 1,
};
const languageCode = 'en';
const originalLanguage: OriginalLanguage = languageCode as OriginalLanguage;

export const movieDetailMock: MovieDetail = {
  adult: false,
  backdrop_path: 'https://example.com/backdrop.jpg',
  belongs_to_collection: null,
  budget: 100000000,
  credits: {
    cast: [],
    crew: [],
  },
  genres: [
    {
      id: 1,
      name: 'Action',
      active: true,
      url: 'https://example.com/genres/1',
      queryParams: {},
    },
    {
      id: 2,
      name: 'Adventure',
      active: false,
      url: 'https://example.com/genres/2',
      queryParams: {},
    },
  ],
  homepage: 'https://example.com',
  id: 12345,
  imdb_id: 'tt12345',
  original_language: OriginalLanguage.En,
  original_title: 'Original Title',
  overview: 'Movie overview',
  popularity: 7.5,
  poster_path: 'https://example.com/poster.jpg',
  production_companies: [
    {
      id: 1,
      logo_path: 'https://example.com/company-logo.jpg',
      name: 'Production Company',
      origin_country: OriginCountry.Us,
    },
  ],
  production_countries: [
    {
      iso_3166_1: OriginCountry.Us,
      name: 'United States of America',
    },
  ],
  recommendations: {
    page: 1,
    results: [],
    total_pages: 1,
    total_results: 0,
  },
  release_date: new Date(),
  revenue: 500000000,
  reviews: {
    page: 1,
    results: [],
    total_pages: 1,
    total_results: 0,
  },
  runtime: 120,
  similar: {
    page: 1,
    results: [],
    total_pages: 1,
    total_results: 0,
  },
  spoken_languages: [
    {
      english_name: 'English',
      iso_639_1: 'en',
      name: 'English',
    },
  ],
  status: 'Released',
  tagline: 'Movie tagline',
  title: 'Movie Title',
  video: false,
  vote_average: 7.2,
  vote_count: 2000,
  videos: {
    results: [
      {
        iso_639_1: OriginalLanguage.En,
        iso_3166_1: OriginCountry.Us,
        name: 'Trailer',
        key: 'trailer_key',
        site: 'YouTube',
        size: 1080,
        type: 'Trailer',
        official: true,
        published_at: new Date(),
        id: 'video_id',
      },
    ],
  },
};

export class MovieRequestMockService {
  getPopular(page?: number): Observable<MoviesData> {
    return of(moviesMock);
  }

  discoverMovies(page?: number): Observable<MoviesData> {
    return of(moviesMock);
  }

  getUpcoming(page?: number): Observable<MoviesData> {
    return of(moviesMock);
  }

  getNowPlaying(page?: number): Observable<MoviesData> {
    return of(moviesMock);
  }

  getTopRatedMovies(page?: number, genres?: string): Observable<MoviesData> {
    return of(moviesMock);
  }

  getMovieDetails(id?: string): Observable<MovieDetail> {
    return of(movieDetailMock);
  }

  getSearchResult(query?: string, page?: number): Observable<MoviesData> {
    return of(moviesMock);
  }

  getMovies(
    type?: string,
    page?: number,
    query?: string,
    genre?: string
  ): Observable<MoviesData> | null {
    return of(moviesMock);
  }
}
