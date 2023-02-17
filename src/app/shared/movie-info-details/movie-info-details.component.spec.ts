import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieInfoDetailsComponent } from './movie-info-details.component';

describe('MovieInfoDetailsComponent', () => {
  let component: MovieInfoDetailsComponent;
  let fixture: ComponentFixture<MovieInfoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieInfoDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieInfoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
