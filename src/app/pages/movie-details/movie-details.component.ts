import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap, map } from 'rxjs';
import { BreakpointService } from '../../services/breakpoint.service';
import { MovieDetail } from 'src/app/interfaces/movie-detail.interface';
import { environment } from '../../../environments/environment';
import { MoviesData } from '../../interfaces/movie-data.interface';
import { MovieRequestService } from '../../services/movie-request.service';

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
  recommendations$: Observable<MoviesData> | null = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private breakpointService: BreakpointService,
    private movieRequest: MovieRequestService
  ) {
    this.movie$ = this.activatedRoute?.data?.pipe(
      map((movie) => movie['data']),
      tap((movie) => {
        let genres: string;
        genres = movie.genres.map((genre) => genre.id).join(',');
        this.recommendations$ = this.movieRequest.getMoviesByGenre(
          genres,
          1,
          true
        );
        this.posterUrl =
          movie.poster_path != null
            ? `${environment.baseImageUrl}w500/${movie.poster_path}`
            : '../../../assets/images/no-poster.jpg';
        window.scrollTo(0, 0);
      })
    );
  }
}
