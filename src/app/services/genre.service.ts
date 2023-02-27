import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { MovieGenre } from '../interfaces/genre.interface';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  constructor(private http: HttpClient) {}

  getGenres(): Observable<MovieGenre> {
    const url = `${environment.baseUrl}genre/movie/list`;

    return this.http.get<MovieGenre>(url);
  }
}
