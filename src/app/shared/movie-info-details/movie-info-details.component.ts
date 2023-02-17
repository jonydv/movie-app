import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MovieDetail } from '../../interfaces/movie-detail.interface';

@Component({
  selector: 'app-movie-info-details',
  templateUrl: './movie-info-details.component.html',
  styleUrls: ['./movie-info-details.component.scss'],
})
export class MovieInfoDetailsComponent implements OnInit {
  @Input() movie: MovieDetail | null = null;
  runtimeDetails: string = '';
  ratingText: string = 'Rating';
  votesText: string = 'Votes: ';
  releaseText: string = '';
  ratingDetails: string = '';
  noRating: boolean = false;
  ngOnInit(): void {
    this.initializeMovieData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['movie']) {
      this.movie = changes['movie'].currentValue;
      this.initializeMovieData();
    }
  }

  initializeMovieData(): void {
    this.noRating = this.movie?.vote_count == 0;
    this.runtimeDetails = `Runtime ${this.movie?.runtime} min`;
    this.releaseText = `Release: ${this.movie?.release_date}`;
    this.ratingDetails = `${this.movie?.vote_average} ${
      this.movie?.vote_count
        ? ' / ' + this.votesText + this.movie.vote_count
        : ''
    }`;
  }
}
