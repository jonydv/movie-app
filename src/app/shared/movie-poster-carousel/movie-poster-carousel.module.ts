import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviePosterCarouselComponent } from './movie-poster-carousel.component';
import { SwiperModule } from 'swiper/angular';
import { RouterModule } from '@angular/router';
import { MovieModule } from '../movie/movie.module';

@NgModule({
  declarations: [MoviePosterCarouselComponent],
  imports: [CommonModule, RouterModule, SwiperModule, MovieModule],
  exports: [MoviePosterCarouselComponent],
})
export class MoviePosterCarouselModule {}
