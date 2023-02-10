import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MoviesData } from '../interfaces/movie-data.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchResultsPageService {
  private searchResults: BehaviorSubject<MoviesData | null> =
    new BehaviorSubject<MoviesData | null>(null);
  constructor() {}

  setSearchResults(value: MoviesData): void {
    this.searchResults.next(value);
  }

  getSearchResults(): Observable<MoviesData | null> {
    return this.searchResults.asObservable();
  }
}
