import { Component } from '@angular/core';
import { of, Observable, map } from 'rxjs';
import { MovieRequestService } from '../../services/movie-request.service';
import { BreakpointService } from '../../services/breakpoint.service';
import { Movie } from '../../interfaces/movie-data.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  isMobile$: Observable<boolean> = this.breakpointService.isMobile();
  nowPlayingMovies$: Observable<Movie[]> = this.movieRequestService
    .getNowPlaying()
    .pipe(map((data) => data.results));
  upcomingMovies$: Observable<Movie[]> = this.movieRequestService
    .getUpcoming()
    .pipe(map((data) => data.results));
  topRatedMovies$: Observable<Movie[]> = this.movieRequestService
    .getTopRatedMovies()
    .pipe(map((data) => data.results));
  upcomingTitle: string = 'Upcoming movies';
  upcomingSubtitle: string = 'Latest movies upcoming';
  upcomingLink: string = '/upcoming';
  upcomingLinkTitle: string = 'See all ';

  topRatedTitle: string = 'Top rated movies';
  topRatedLink: string = '/top-rated';
  topRatedLinkTitle: string = 'See all ';
  constructor(
    private movieRequestService: MovieRequestService,
    private breakpointService: BreakpointService
  ) {}
}

/**
 *
 *
 *
 *     useEffect (() => {
        switch (videoPlatform) {
            case "YouTube":
                setUrlVideo(`https://youtu.be/${videoKey}`);
                break;
            case "Vimeo":
                setUrlVideo(`https://vimeo.com/${videoKey}`);
                break;
            default:
                break;
        }
    }, [videoKey, videoPlatform]);
 *
 */
