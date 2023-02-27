import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailMetaResolver } from 'src/app/meta-resolvers/movie-detail-meta.resolver';
import { MovieDetailsComponent } from './movie-details.component';

const routes: Routes = [
  {
    path: '',
    component: MovieDetailsComponent,
    resolve: {
      data: MovieDetailMetaResolver,
    },
    data: {
      title: 'Movie Details | JDVM',
    },
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class MovieDetailsRoutingModule {}
