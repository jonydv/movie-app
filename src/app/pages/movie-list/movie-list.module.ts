import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieListRoutingModule } from './movie-list-routing.module';
import { MovieListComponent } from './movie-list.component';
import { CustomInfiniteScrollModule } from '../../shared/infinite-scroll/infinite-scroll.module';
import { MovieGenresModule } from '../../shared/movie-genres/movie-genres.module';

@NgModule({
  declarations: [MovieListComponent],
  imports: [
    CommonModule,
    MovieListRoutingModule,
    CustomInfiniteScrollModule,
    MovieGenresModule,
  ],
})
export class MovieListModule {}
