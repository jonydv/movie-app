import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCreditsComponent } from './movie-credits.component';

@NgModule({
  declarations: [MovieCreditsComponent],
  imports: [CommonModule],
  exports: [MovieCreditsComponent],
})
export class MovieCreditsModule {}
