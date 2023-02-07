import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { MovieCarouselComponent } from './movie-carousel.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MovieCarouselComponent],
  imports: [CommonModule, SwiperModule, RouterModule],
  exports: [MovieCarouselComponent],
})
export class MovieCarouselModule {}
