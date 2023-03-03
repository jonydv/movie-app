import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieRequestService } from 'src/app/services/movie-request.service';
import { MovieCarouselModule } from 'src/app/shared/movie-carousel/movie-carousel.module';
import { MoviePosterCarouselModule } from 'src/app/shared/movie-poster-carousel/movie-poster-carousel.module';
import { MoviesGridModule } from 'src/app/shared/movies-grid/movies-grid.module';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BreakpointService } from '../../services/breakpoint.service';
import { MovieRequestMockService } from 'src/app/services/movie-request-mock.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: MovieRequestMockService;
  let breakpointService: BreakpointService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        HomeRoutingModule,
        MovieCarouselModule,
        MoviePosterCarouselModule,
        MoviesGridModule,
        HttpClientTestingModule,
      ],
      providers: [MovieRequestMockService, BreakpointService],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    (service = TestBed.inject(MovieRequestMockService)),
      (breakpointService = TestBed.inject(BreakpointService));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
