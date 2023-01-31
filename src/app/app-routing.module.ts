import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { UpcomingMoviesComponent } from './pages/upcoming-movies/upcoming-movies.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
    title: 'Homepage',
  },
  {
    path: 'movie/:id',
    component: MovieDetailsComponent,
    loadChildren: () =>
      import('./pages/movie-details/movie-details.module').then(
        (m) => m.MovieDetailsModule
      ),
    title: 'Movie details',
  },
  {
    path: 'upcoming',
    component: UpcomingMoviesComponent,
    loadChildren: () =>
      import('./pages/upcoming-movies/upcoming-movies.module').then(
        (m) => m.UpcomingMoviesModule
      ),
    title: 'Upcoming movies',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
