import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-details.component';
import { MovieDetailsRoutingModule } from './movie-details-routing.module';

@NgModule({
  declarations: [MovieDetailsComponent],
  imports: [CommonModule, MovieDetailsRoutingModule],
})
export class MovieDetailsModule {}
