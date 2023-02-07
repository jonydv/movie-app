import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieRequestService } from '../../services/movie-request.service';
import { combineLatest, Observable, switchMap } from 'rxjs';
import { Movie } from '../../interfaces/movie-data.interface';
import { BreakpointService } from '../../services/breakpoint.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent {
  movie$: Observable<Movie> = this.activatedRoute.params.pipe(
    switchMap((params) => {
      return this.movieRequest.getMovieDetails(params['id']);
    })
  );
  isMobile: Observable<boolean> = this.breakpointService.isMobile();
  constructor(
    private movieRequest: MovieRequestService,
    private activatedRoute: ActivatedRoute,
    private breakpointService: BreakpointService
  ) {}
}
