import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieRequestService } from '../../services/movie-request.service';
import { Observable, switchMap, tap } from 'rxjs';
import { BreakpointService } from '../../services/breakpoint.service';
import { MovieDetail } from 'src/app/interfaces/movie-detail.interface';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent {
  posterUrl: string = '';
  movie$: Observable<MovieDetail> | null = null;
  isMobile$: Observable<boolean> = this.breakpointService.isMobile();
  ratingText: string = 'Rating';
  votesText: string = 'Votes: ';
  similarTitle: string = 'You might also be interested';
  director: string = '';
  constructor(
    private movieRequest: MovieRequestService,
    private activatedRoute: ActivatedRoute,
    private breakpointService: BreakpointService
  ) {
    this.movie$ = this.activatedRoute.params.pipe(
      switchMap((params) => {
        return this.movieRequest.getMovieDetails(params['id']).pipe(
          tap((movie) => {
            console.log(movie);
            this.posterUrl =
              movie.poster_path != null
                ? `${environment.baseImageUrl}w300/${movie.poster_path}`
                : '../../../assets/images/no-poster.jpg';
            window.scrollTo(0, 0);
          })
        );
      })
    );
  }
}
