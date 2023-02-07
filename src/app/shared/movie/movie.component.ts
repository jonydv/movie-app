import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie-data.interface';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie | null = null;
  imageUrl: string = '';
  movieDetailUrl: string = '';

  ngOnInit(): void {
    this.imageUrl = `${environment.baseImageUrl}w500/${this.movie?.poster_path}`;
    this.movieDetailUrl = `/movie/${this.movie?.id}`;
  }
}
