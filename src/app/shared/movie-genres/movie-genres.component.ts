import {
  Component,
  Input,
  Output,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';
import { Genre } from '../../interfaces/movie-detail.interface';

@Component({
  selector: 'app-movie-genres',
  templateUrl: './movie-genres.component.html',
  styleUrls: ['./movie-genres.component.scss'],
})
export class MovieGenresComponent {
  @Input() genres: Genre[] | null = null;
  @Input() appliedGenres: string = '';
  @Input() fromMovieList: boolean = false;
  @Output() genresNames: EventEmitter<string> = new EventEmitter<string>();
  updatedGenres: Genre[] | null = null;
  Ids: string[] = [];

  ngOnInit(): void {
    if (this.fromMovieList) {
      this.applied();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      (changes['appliedGenres']?.currentValue ||
        changes['appliedGenres']?.previousValue) &&
      !changes['appliedGenres']?.firstChange &&
      this.fromMovieList
    ) {
      this.appliedGenres = changes['appliedGenres']?.currentValue;
      this.applied();
    }
  }

  applied() {
    // Split selected genre IDs by comma and remove empty strings
    let genresNamesApplied: string = '';
    const selectedIds = this.appliedGenres
      .split(',')
      .filter((id) => id.trim() !== '');

    // Map through all genres and create a new array with updated genre objects
    this.updatedGenres = this.genres!.map((genre) => {
      // Check if current genre ID is included in selected IDs array
      const isActive = selectedIds.includes(String(genre.id));

      // Accumulate the genre names active, to make an emision to his parent
      genresNamesApplied =
        genresNamesApplied +
        (selectedIds.includes(String(genre.id))
          ? `${genresNamesApplied.length == 0 ? '' : ', '}${genre.name}`
          : '');

      // Create updated selected IDs array based on current genre active state
      const updatedSelectedIds = isActive
        ? selectedIds.filter((id) => id !== String(genre.id))
        : selectedIds.concat(genre.id.toString());

      // Create query parameters object based on updated selected IDs array
      const queryParams =
        updatedSelectedIds.length > 0
          ? { genre: updatedSelectedIds.join(',') }
          : {};

      // Set URL for genre link
      const url = '/movies';

      // Determine active state for genre
      const active =
        isActive || updatedSelectedIds.length === selectedIds.length;

      // Return updated genre object with new properties
      return {
        ...genre,
        active,
        url,
        queryParams,
      };
    });

    //Emit the genresName to show in the title of his parent
    this.genresNames.emit(genresNamesApplied);
  }
}
