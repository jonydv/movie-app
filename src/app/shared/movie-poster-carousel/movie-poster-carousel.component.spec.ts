import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SwiperModule } from 'swiper/angular';
import { MovieModule } from '../movie/movie.module';

import { MoviePosterCarouselComponent } from './movie-poster-carousel.component';

describe('MoviePosterCarouselComponent', () => {
  let component: MoviePosterCarouselComponent;
  let fixture: ComponentFixture<MoviePosterCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviePosterCarouselComponent],
      imports: [RouterTestingModule.withRoutes([]), SwiperModule, MovieModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MoviePosterCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
