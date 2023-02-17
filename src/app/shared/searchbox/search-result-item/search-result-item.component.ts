import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Movie } from '../../../interfaces/movie-data.interface';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss'],
})
export class SearchResultItemComponent implements OnInit {
  @Input() movie!: Movie;
  @Output() navigated: EventEmitter<boolean> = new EventEmitter();
  posterPath: string = '';

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.posterPath =
      this.movie.poster_path != null
        ? `${environment.baseImageUrl}w300/${this.movie.poster_path}`
        : '../../../../assets/images/no-poster.jpg';
  }

  navigateToMovieDetails(id: string | number): void {
    this.router
      .navigateByUrl(`/movie/${id}`)
      .then((navigated) => this.navigated.emit(navigated));
  }
}
