import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie-data.interface';
import { environment } from 'src/environments/environment';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-movie-poster-carousel',
  templateUrl: './movie-poster-carousel.component.html',
  styleUrls: ['./movie-poster-carousel.component.scss'],
})
export class MoviePosterCarouselComponent {
  @Input() movies: Movie[] = [];
  @Input() isMobile: boolean = false;
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() link: string = '';
  @Input() linkTitle: string = '';
  swiperConfig: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 10,
    pagination: true,
    navigation: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      356: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      526: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      696: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1400: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
  };
}
