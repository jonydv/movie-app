import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieVideoComponent } from './movie-video.component';
import { SanitizeUrlModule } from 'src/app/pipes/santize-url/sanitize-url.module';

@NgModule({
  declarations: [MovieVideoComponent],
  imports: [CommonModule, SanitizeUrlModule],
  exports: [MovieVideoComponent],
})
export class MovieVideoModule {}
