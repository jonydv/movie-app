import { Component, Input, SimpleChanges } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MovieDetail } from '../../interfaces/movie-detail.interface';

@Component({
  selector: 'app-movie-plot',
  templateUrl: './movie-plot.component.html',
  styleUrls: ['./movie-plot.component.scss'],
})
export class MoviePlotComponent {
  @Input() movie: MovieDetail | null = null;
  title: string = 'Plot';
  directorText: string = 'Director: ';
  tagLine: string = 'Tagline: ';
  directorName: string | null = null;
  runtime: string = 'Runtime: ';
  minutes: string = ' minutes';
  budget: string = 'Budget:';
  spokenLanguages: string = 'Spoken languages:';
  status: string = 'Status: ';
  imdbUrl: string | null = '';
  imdbLogoUrl: string = '../../../assets/images/imdb-logo.png';
  imdbText: string = 'View on imdb: ';
  officialPage: string = 'Official website: ';
  ngOnInit(): void {
    this.initializeDirectorName();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['movie']) {
      this.movie = changes['movie'].currentValue;
      this.initializeDirectorName();
    }
  }
  initializeDirectorName() {
    this.imdbUrl = `${environment.imdbBaseUrl}${this.movie?.imdb_id}`;
    this.directorName =
      this.movie?.credits?.crew.filter((person) => person?.job == 'Director')[0]
        ?.name || null;
  }
}
