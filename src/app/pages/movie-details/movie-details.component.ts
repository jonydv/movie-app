import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap, map } from 'rxjs';
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
  videoTrailer: string = 'Trailer';
  constructor(
    private activatedRoute: ActivatedRoute,
    private breakpointService: BreakpointService
  ) {
    this.movie$ = this.activatedRoute.data.pipe(
      map((movie) => movie['data']),
      tap((movie) => {
        this.posterUrl =
          movie.poster_path != null
            ? `${environment.baseImageUrl}w500/${movie.poster_path}`
            : '../../../assets/images/no-poster.jpg';
        window.scrollTo(0, 0);
      })
    );
  }
}
