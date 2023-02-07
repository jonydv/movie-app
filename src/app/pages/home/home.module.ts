import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MovieCarouselModule } from '../../shared/movie-carousel/movie-carousel.module';
import { MoviePosterCarouselModule } from '../../shared/movie-poster-carousel/movie-poster-carousel.module';
import { MoviesGridModule } from '../../shared/movies-grid/movies-grid.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MovieCarouselModule,
    MoviePosterCarouselModule,
    MoviesGridModule,
  ],
})
export class HomeModule {}
