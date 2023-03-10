import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-details.component';
import { MovieDetailsRoutingModule } from './movie-details-routing.module';
import { MovieVideoModule } from '../../shared/movie-video/movie-video.module';
import { MoviesGridModule } from '../../shared/movies-grid/movies-grid.module';
import { MovieInfoDetailsModule } from '../../shared/movie-info-details/movie-info-details.module';
import { MovieGenresModule } from '../../shared/movie-genres/movie-genres.module';
import { MoviePlotModule } from '../../shared/movie-plot/movie-plot.module';
import { MovieCreditsModule } from '../../shared/movie-credits/movie-credits.module';
import { MovieReviewsModule } from '../../shared/movie-reviews/movie-reviews.module';

@NgModule({
  declarations: [MovieDetailsComponent],
  imports: [
    CommonModule,
    MovieDetailsRoutingModule,
    MovieVideoModule,
    MoviesGridModule,
    MovieInfoDetailsModule,
    MovieGenresModule,
    MoviePlotModule,
    MovieCreditsModule,
    MovieReviewsModule,
  ],
})
export class MovieDetailsModule {}
