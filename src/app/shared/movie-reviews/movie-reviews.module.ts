import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieReviewsComponent } from './movie-reviews.component';
import { SafeHtmlModule } from '../../pipes/safe-html/safe-html.module';

@NgModule({
  declarations: [MovieReviewsComponent],
  imports: [CommonModule, SafeHtmlModule],
  exports: [MovieReviewsComponent],
})
export class MovieReviewsModule {}
