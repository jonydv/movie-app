import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CustomInfiniteScrollModule } from 'src/app/shared/infinite-scroll/infinite-scroll.module';
import { MovieModule } from 'src/app/shared/movie/movie.module';
import { SpinnerWithBackdropModule } from 'src/app/shared/spinner-with-backdrop/spinner-with-backdrop.module';
import { UpcomingMoviesRoutingModule } from './upcoming-movies-routing.module';

import { UpcomingMoviesComponent } from './upcoming-movies.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieRequestService } from '../../services/movie-request.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UpcomingMoviesComponent', () => {
  let component: UpcomingMoviesComponent;
  let fixture: ComponentFixture<UpcomingMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpcomingMoviesComponent],
      imports: [
        UpcomingMoviesRoutingModule,
        MovieModule,
        InfiniteScrollModule,
        SpinnerWithBackdropModule,
        CustomInfiniteScrollModule,
        HttpClientTestingModule,
      ],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(UpcomingMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
