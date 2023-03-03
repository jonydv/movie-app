import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieReviewsComponent } from './movie-reviews.component';
import { SafeHtmlModule } from '../../pipes/safe-html/safe-html.module';

describe('MovieReviewsComponent', () => {
  let component: MovieReviewsComponent;
  let fixture: ComponentFixture<MovieReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieReviewsComponent],
      imports: [SafeHtmlModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
