import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  combineLatest,
  debounceTime,
  switchMap,
  Observable,
  filter,
} from 'rxjs';
import { MovieRequestService } from '../../services/movie-request.service';
import { MoviesData } from '../../interfaces/movie-data.interface';
import { tap } from 'rxjs';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss'],
})
export class SearchboxComponent implements OnInit {
  query: FormControl = new FormControl('');
  results$: Observable<MoviesData | null> | undefined = undefined;
  noResultsText: string = 'No results found for ';
  haveResults: boolean = true;
  placeholderSearch: string = 'Search...';
  constructor(private movieRequest: MovieRequestService) {}

  ngOnInit(): void {
    this.results$ = this.query.valueChanges
      .pipe(
        debounceTime(400),
        filter((query) => query.length > 2),
        switchMap((query: string) => {
          return this.movieRequest.getSearchResult(query.trim());
        })
      )
      .pipe(tap((data) => (this.haveResults = data.results.length > 0)));
  }
  submitSearch() {
    console.log('submit', this.query.value);
  }

  resetSearch() {
    this.query.setValue('');
  }

  navigateToMovieDetail(event: boolean) {
    if (event) {
      this.resetSearch();
    }
  }
}
