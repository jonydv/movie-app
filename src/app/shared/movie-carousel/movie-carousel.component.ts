import { Component, Input } from '@angular/core';
import SwiperCore, { Autoplay, Navigation, SwiperOptions } from 'swiper';
import { Movie } from '../../interfaces/movie-data.interface';
import { environment } from '../../../environments/environment.prod';

SwiperCore.use([Navigation, Autoplay]);
@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.scss'],
})
export class MovieCarouselComponent {
  @Input() movies: Movie[] = [];
  @Input() isMobile: boolean = false;
  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: true,
    navigation: true,
  };
  movieBackdropBaseUrl: string = `${environment.baseImageUrl}`;
  ratingText: string = 'Rating: ';
  seeMoreText: string = 'See more';
  votesText: string = 'Votes: ';
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.movies);
  }
}
