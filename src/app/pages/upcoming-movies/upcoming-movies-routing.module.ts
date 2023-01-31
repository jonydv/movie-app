import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpcomingMoviesComponent } from './upcoming-movies.component';

const routes: Routes = [
  { path: '', component: UpcomingMoviesComponent, title: 'Upcoming movies' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class UpcomingMoviesRoutingModule {}
