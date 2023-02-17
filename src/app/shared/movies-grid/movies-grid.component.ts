import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
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
  posters: string[] = ['', '', '', ''];
  ids: string[] | number[] = ['', '', '', ''];
  posterIndex: number = 0;
  posterOneIndex: number = 0;
  posterTwoIndex: number = 0;
  posterThreeIndex: number = 0;
  posterFourIndex: number = 0;
  noPosterPath: string = '../../../assets/images/no-poster.jpg';
  ngOnInit(): void {
    this.setIndexValues();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes['movies']) {
      this.movies = changes['movies'].currentValue;
      this.setIndexValues();
    }
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
    this.moviePosterBaseUrl =
      this.movies[this.posterIndex]?.poster_path != null
        ? `${environment.baseImageUrl}w500/${
            this.movies[this.posterIndex].poster_path
          }`
        : this.noPosterPath;
    this.posters[0] =
      this.movies[this.posterOneIndex]?.poster_path != null
        ? `${environment.baseImageUrl}w300/${
            this.movies[this.posterOneIndex].poster_path
          }`
        : this.noPosterPath;
    this.posters[1] =
      this.movies[this.posterTwoIndex]?.poster_path != null
        ? `${environment.baseImageUrl}w300/${
            this.movies[this.posterTwoIndex].poster_path
          }`
        : this.noPosterPath;
    this.posters[2] =
      this.movies[this.posterThreeIndex]?.poster_path != null
        ? `${environment.baseImageUrl}w300/${
            this.movies[this.posterThreeIndex].poster_path
          }`
        : this.noPosterPath;
    this.posters[3] =
      this.movies[this.posterFourIndex]?.poster_path != null
        ? `${environment.baseImageUrl}w300/${
            this.movies[this.posterFourIndex].poster_path
          }`
        : this.noPosterPath;
    this.ids[0] = this.movies[this.posterOneIndex]?.id;
    this.ids[1] = this.movies[this.posterTwoIndex]?.id;
    this.ids[2] = this.movies[this.posterThreeIndex]?.id;
    this.ids[3] = this.movies[this.posterFourIndex]?.id;
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
