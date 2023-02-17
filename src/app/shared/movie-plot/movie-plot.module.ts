import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviePlotComponent } from './movie-plot.component';

@NgModule({
  declarations: [MoviePlotComponent],
  imports: [CommonModule],
  exports: [MoviePlotComponent],
})
export class MoviePlotModule {}
