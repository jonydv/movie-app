import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-details.component';
import { MovieDetailsRoutingModule } from './movie-details-routing.module';
import { SpinnerWithBackdropModule } from '../../shared/spinner-with-backdrop/spinner-with-backdrop.module';

@NgModule({
  declarations: [MovieDetailsComponent],
  imports: [CommonModule, MovieDetailsRoutingModule, SpinnerWithBackdropModule],
})
export class MovieDetailsModule {}
