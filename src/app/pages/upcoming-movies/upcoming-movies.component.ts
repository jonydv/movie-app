import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { movieRequestType } from '../../constants/movie-request-type';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.scss'],
})
export class UpcomingMoviesComponent implements OnInit {
  type: string = movieRequestType.upcoming;
  upcomingTitle: string = 'Upcoming movies';
  constructor() {}

  ngOnInit(): void {
    //window.scrollTo(0, 0);
  }
}
