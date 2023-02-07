import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpcomingMoviesComponent } from './upcoming-movies.component';
import { UpcomingMoviesRoutingModule } from './upcoming-movies-routing.module';

import { MovieModule } from '../../shared/movie/movie.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SpinnerWithBackdropModule } from '../../shared/spinner-with-backdrop/spinner-with-backdrop.module';

@NgModule({
  declarations: [UpcomingMoviesComponent],
  imports: [
    CommonModule,
    UpcomingMoviesRoutingModule,
    MovieModule,
    InfiniteScrollModule,
    SpinnerWithBackdropModule,
  ],
})
export class UpcomingMoviesModule {}
