import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import {
  ActivatedRouteSnapshot,
  Resolve,
  ActivatedRoute,
} from '@angular/router';
import { Observable, switchMap, map } from 'rxjs';
import { MovieRequestService } from '../services/movie-request.service';
import { MovieDetail } from '../interfaces/movie-detail.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieDetailMetaResolver implements Resolve<MovieDetail> {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private movieRequest: MovieRequestService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<MovieDetail> {
    const id = route.params['id'];
    return this.movieRequest.getMovieDetails(id).pipe(
      map((movie) => {
        const title: string =
          movie.original_title + ' | JDVM' || 'Movie Detail';
        this.titleService.setTitle(title);
        this.metaService.updateTag({ name: 'title', content: title });
        return movie;
      })
    );
  }
}
