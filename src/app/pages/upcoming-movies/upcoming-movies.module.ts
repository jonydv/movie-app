import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpcomingMoviesComponent } from './upcoming-movies.component';
import { UpcomingMoviesRoutingModule } from './upcoming-movies-routing.module';

@NgModule({
  declarations: [UpcomingMoviesComponent],
  imports: [CommonModule, UpcomingMoviesRoutingModule],
})
export class UpcomingMoviesModule {}
