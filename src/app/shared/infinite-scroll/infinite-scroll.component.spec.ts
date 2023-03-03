import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MovieModule } from '../movie/movie.module';

import { InfiniteScrollComponent } from './infinite-scroll.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MovieRequestMockService } from 'src/app/services/movie-request-mock.service';

describe('InfiniteScrollComponent', () => {
  let component: InfiniteScrollComponent;
  let fixture: ComponentFixture<InfiniteScrollComponent>;
  let service: MovieRequestMockService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfiniteScrollComponent],
      imports: [MovieModule, InfiniteScrollModule, HttpClientTestingModule],
      providers: [MovieRequestMockService],
    }).compileComponents();

    fixture = TestBed.createComponent(InfiniteScrollComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(MovieRequestMockService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
