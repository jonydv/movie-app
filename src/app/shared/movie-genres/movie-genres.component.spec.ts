import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MovieGenresComponent } from './movie-genres.component';

describe('MovieGenresComponent', () => {
  let component: MovieGenresComponent;
  let fixture: ComponentFixture<MovieGenresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieGenresComponent],
      imports: [RouterTestingModule.withRoutes([])],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
