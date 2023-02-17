import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePlotComponent } from './movie-plot.component';

describe('MoviePlotComponent', () => {
  let component: MoviePlotComponent;
  let fixture: ComponentFixture<MoviePlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviePlotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviePlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
