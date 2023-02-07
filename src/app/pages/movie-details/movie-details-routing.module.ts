import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movie-details.component';

const routes: Routes = [
  {
    path: '',
    component: MovieDetailsComponent,
    title: 'Movie details page',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class MovieDetailsRoutingModule {}
