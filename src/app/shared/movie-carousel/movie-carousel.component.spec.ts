import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SwiperModule } from 'swiper/angular';
import { MovieModule } from '../movie/movie.module';

import { MovieCarouselComponent } from './movie-carousel.component';

describe('MovieCarouselComponent', () => {
  let component: MovieCarouselComponent;
  let fixture: ComponentFixture<MovieCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieCarouselComponent],
      imports: [RouterTestingModule.withRoutes([]), SwiperModule, MovieModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
