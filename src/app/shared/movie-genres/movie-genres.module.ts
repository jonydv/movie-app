import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieGenresComponent } from './movie-genres.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MovieGenresComponent],
  imports: [CommonModule, RouterModule],
  exports: [MovieGenresComponent],
})
export class MovieGenresModule {}
