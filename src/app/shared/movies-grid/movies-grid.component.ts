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
  moviePosterBaseUrl: string = `${environment.baseImageUrl}w500`;
  posterIndex: number = 0;
  posterOneIndex: number = 0;
  posterTwoIndex: number = 0;
  posterThreeIndex: number = 0;
  posterFourIndex: number = 0;
  ngOnInit(): void {
    this.setIndexValues();
  }
  getRandomInt(): number {
    return Math.floor(Math.random() * this.movies.length);
  }

  setIndexValues(): void {
    while (
      this.posterIndex === this.posterOneIndex ||
      this.posterIndex === this.posterTwoIndex ||
      this.posterIndex === this.posterThreeIndex ||
      this.posterIndex === this.posterFourIndex ||
      this.posterOneIndex === this.posterTwoIndex ||
      this.posterOneIndex === this.posterThreeIndex ||
      this.posterOneIndex === this.posterFourIndex ||
      this.posterTwoIndex === this.posterThreeIndex ||
      this.posterTwoIndex === this.posterFourIndex ||
      this.posterThreeIndex === this.posterFourIndex
    ) {
      this.posterIndex = this.getRandomInt();
      this.posterOneIndex = this.getRandomInt();
      this.posterTwoIndex = this.getRandomInt();
      this.posterThreeIndex = this.getRandomInt();
      this.posterFourIndex = this.getRandomInt();
    }

    /*
    Another way to get dinamic index from 0 to 20
        const indices = Array.from({ length: 21 }, (_, i) => i);
    indices.sort(() => Math.random() - 0.5);

    this.posterIndex = indices[0];
    this.posterOneIndex = indices[1];
    this.posterTwoIndex = indices[2];
    this.posterThreeIndex = indices[3];
    this.posterFourIndex = indices[4];
    */
  }
}
