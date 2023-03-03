import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchboxComponent } from './searchbox.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MovieRequestService } from '../../services/movie-request.service';
import { SearchResultItemComponent } from './search-result-item/search-result-item.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MovieRequestMockService } from 'src/app/services/movie-request-mock.service';

describe('SearchboxComponent', () => {
  let component: SearchboxComponent;
  let fixture: ComponentFixture<SearchboxComponent>;
  let service: MovieRequestMockService;
  let router: Router;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchboxComponent, SearchResultItemComponent],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [MovieRequestMockService, Router],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchboxComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(MovieRequestMockService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
