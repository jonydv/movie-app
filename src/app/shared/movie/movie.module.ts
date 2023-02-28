import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { RouterModule } from '@angular/router';
import { MovieInfoDetailsModule } from '../movie-info-details/movie-info-details.module';

@NgModule({
  declarations: [MovieComponent],
  imports: [CommonModule, RouterModule, MovieInfoDetailsModule],
  exports: [MovieComponent],
})
export class MovieModule {}
