import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomInfiniteScrollModule } from 'src/app/shared/infinite-scroll/infinite-scroll.module';
import { MovieGenresModule } from 'src/app/shared/movie-genres/movie-genres.module';
import { MovieListRoutingModule } from './movie-list-routing.module';

import { MovieListComponent } from './movie-list.component';
import { GenreService } from '../../services/genre.service';
import { SearchResultsPageService } from '../../services/search-results-page.service';
import { BreakpointService } from '../../services/breakpoint.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;
  let activated: ActivatedRoute;
  let breakpoint: BreakpointService;
  let service: SearchResultsPageService;
  let genreService: GenreService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieListComponent],
      imports: [
        MovieListRoutingModule,
        CustomInfiniteScrollModule,
        MovieGenresModule,
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => '1', // provide a movie id value for testing
              },
            },
          },
        },
        SearchResultsPageService,
        GenreService,
        BreakpointService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    activated = TestBed.inject(ActivatedRoute);
    breakpoint = TestBed.inject(BreakpointService);
    genreService = TestBed.inject(GenreService);
    service = TestBed.inject(SearchResultsPageService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
