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
  @Input() fromList: boolean = false;
  imageUrl: string = '';
  movieDetailUrl: string = '';

  constructor() {}
  ngOnInit(): void {
    this.imageUrl = `${environment.baseImageUrl}w300/${this.movie?.poster_path}`;
    this.movieDetailUrl = `/movie/${this.movie?.id}`;
  }
}
