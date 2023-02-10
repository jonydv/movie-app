import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { MovieDetail, Video } from '../../interfaces/movie-detail.interface';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-video',
  templateUrl: './movie-video.component.html',
  styleUrls: ['./movie-video.component.scss'],
})
export class MovieVideoComponent implements OnInit, OnChanges {
  @Input() movie: MovieDetail | null = null;
  videoUrl: string = '';

  ngOnInit(): void {
    if (this.movie?.videos?.results?.length) {
      this.initializeVideo();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initializeVideo();
  }
  initializeVideo() {
    let videoTrailer =
      this.movie?.videos?.results?.filter(
        (video) => video?.type == 'Trailer'
      )[0] || null;
    this.videoUrl = this.getVideoUrl(videoTrailer!) || '';
  }
  getVideoUrl(video: Video): string {
    if (video.site == 'YouTube') {
      return `https://www.youtube.com/embed/${video.key}?enablejsapi=1&mute=0`;
    } else {
      return `https://vimeo.com/${video.key}`;
    }
  }
}
