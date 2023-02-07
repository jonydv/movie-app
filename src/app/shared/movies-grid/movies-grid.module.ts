import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesGridComponent } from './movies-grid.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MoviesGridComponent],
  imports: [CommonModule, RouterModule],
  exports: [MoviesGridComponent],
})
export class MoviesGridModule {}
