import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollComponent } from './infinite-scroll.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MovieModule } from '../movie/movie.module';

@NgModule({
  declarations: [InfiniteScrollComponent],
  imports: [CommonModule, MovieModule, InfiniteScrollModule],
  exports: [InfiniteScrollComponent],
})
export class CustomInfiniteScrollModule {}
