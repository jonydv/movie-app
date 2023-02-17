import { Component, Input, SimpleChanges } from '@angular/core';
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
    this.directorName =
      this.movie?.credits.crew.filter((person) => person.job == 'Director')[0]
        .name || null;
  }
}
