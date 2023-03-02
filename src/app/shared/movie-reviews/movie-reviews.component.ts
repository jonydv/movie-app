import { Component, Input, SimpleChanges } from '@angular/core';
import { Reviews } from 'src/app/interfaces/movie-detail.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-reviews',
  templateUrl: './movie-reviews.component.html',
  styleUrls: ['./movie-reviews.component.scss'],
})
export class MovieReviewsComponent {
  @Input() reviews: Reviews | null = null;
  baseImageUrl: string = environment.baseImageUrl + 'w300/';
  title: string = 'Reviews';
}
