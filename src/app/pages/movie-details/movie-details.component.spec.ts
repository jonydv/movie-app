import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieCreditsModule } from 'src/app/shared/movie-credits/movie-credits.module';
import { MovieGenresModule } from 'src/app/shared/movie-genres/movie-genres.module';
import { MovieInfoDetailsModule } from 'src/app/shared/movie-info-details/movie-info-details.module';
import { MoviePlotModule } from 'src/app/shared/movie-plot/movie-plot.module';
import { MovieReviewsModule } from 'src/app/shared/movie-reviews/movie-reviews.module';
import { MovieVideoModule } from 'src/app/shared/movie-video/movie-video.module';
import { MoviesGridModule } from 'src/app/shared/movies-grid/movies-grid.module';
import { MovieDetailsRoutingModule } from './movie-details-routing.module';

import { MovieDetailsComponent } from './movie-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { MovieRequestService } from '../../services/movie-request.service';
import { BreakpointService } from '../../services/breakpoint.service';
import { MovieRequestMockService } from 'src/app/services/movie-request-mock.service';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;
  let activated: ActivatedRoute;
  let breakpoint: BreakpointService;
  let service: MovieRequestMockService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieDetailsComponent],
      imports: [
        MovieDetailsRoutingModule,
        MovieVideoModule,
        MoviesGridModule,
        MovieInfoDetailsModule,
        MovieGenresModule,
        MoviePlotModule,
        MovieCreditsModule,
        MovieReviewsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => '12', // provide a movie id value for testing
              },
            },
          },
        },
        BreakpointService,
        MovieRequestMockService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    activated = TestBed.inject(ActivatedRoute);
    breakpoint = TestBed.inject(BreakpointService);
    service = TestBed.inject(MovieRequestMockService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
