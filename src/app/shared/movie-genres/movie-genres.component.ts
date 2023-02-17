import { Component, Input } from '@angular/core';
import { Genre } from '../../interfaces/movie-detail.interface';

@Component({
  selector: 'app-movie-genres',
  templateUrl: './movie-genres.component.html',
  styleUrls: ['./movie-genres.component.scss'],
})
export class MovieGenresComponent {
  @Input() genres: Genre[] | null = null;
}
