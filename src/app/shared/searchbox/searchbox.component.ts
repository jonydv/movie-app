import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
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
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss'],
})
export class SearchboxComponent implements OnInit {
  @Input() isMobile: boolean = false;
  @Output() close: EventEmitter<boolean> = new EventEmitter();
  @ViewChild('input', { static: false }) input: ElementRef | null = null;
  query: FormControl = new FormControl('');
  results$: Observable<MoviesData | null> | undefined = undefined;
  noResultsText: string = 'No results found for ';
  haveResults: boolean = true;
  placeholderSearch: string = 'Search...';
  closeText: string = 'close';
  constructor(
    private movieRequest: MovieRequestService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.results$ = this.query.valueChanges
      .pipe(
        debounceTime(400),
        filter((query) => query.length > 2),
        switchMap((query: string) => {
          console.log(query);
          return this.movieRequest.getSearchResult(query.trim());
        })
      )
      .pipe(tap((data) => (this.haveResults = data.results.length > 0)));
  }

  ngAfterViewInit() {
    if (this.isMobile && this.input) {
      this.input.nativeElement.focus();
    }
  }

  submitSearch() {
    if (this.query.value.length < 2) {
      return;
    }
    this.router.navigateByUrl(`/movies?query=${this.query.value}`);
    this.resetSearch();
  }

  resetSearch() {
    this.query.setValue('');
  }

  navigateToMovieDetail(event: boolean, isMobile: boolean = false) {
    if (event) {
      this.resetSearch();
    }
    if (isMobile) {
      this.closeSearch();
    }
  }

  closeSearch() {
    this.close.emit(true);
    this.resetSearch();
  }
}
