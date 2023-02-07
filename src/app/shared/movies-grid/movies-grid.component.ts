import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from '../../interfaces/movie-data.interface';

@Component({
  selector: 'app-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.scss'],
})
export class MoviesGridComponent implements OnInit {
  @Input() movies: Movie[] = [];
  @Input() isMobile: boolean = false;
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() link: string = '';
  @Input() linkTitle: string = '';
  movieBackdropBaseUrl: string = `${environment.baseImageUrl}w500`;
  moviePosterBaseUrl: string = `${environment.baseImageUrl}w500`;
  posterIndex: number = 0;
  backdropOneIndex: number = 0;
  backdropTwoIndex: number = 0;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    while (
      this.posterIndex === this.backdropOneIndex ||
      this.backdropOneIndex === this.backdropTwoIndex ||
      this.backdropTwoIndex === this.posterIndex
    ) {
      this.posterIndex = this.getRandomInt();
      this.backdropOneIndex = this.getRandomInt();
      this.backdropTwoIndex = this.getRandomInt();
    }
  }
  getRandomInt(): number {
    return Math.floor(Math.random() * 21);
  }
}
