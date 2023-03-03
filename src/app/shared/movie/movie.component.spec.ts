import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieComponent } from './movie.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MovieInfoDetailsModule } from '../movie-info-details/movie-info-details.module';

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieComponent],
      imports: [RouterTestingModule.withRoutes([]), MovieInfoDetailsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
