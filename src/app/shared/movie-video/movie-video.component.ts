import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { MovieDetail, Video } from '../../interfaces/movie-detail.interface';
import { OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-video',
  templateUrl: './movie-video.component.html',
  styleUrls: ['./movie-video.component.scss'],
})
export class MovieVideoComponent implements OnInit, OnChanges {
  @Input() movie: MovieDetail | null = null;
  videoUrl: string = '';
  backdropUrl: string = '';
  playVideo: boolean = false;
  ngOnInit(): void {
    if (this.movie?.videos?.results?.length) {
      this.initializeVideo();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initializeVideo();
  }
  initializeVideo() {
    this.playVideo = false;
    this.backdropUrl = `${environment.baseImageUrl}w500/${this.movie?.backdrop_path}`;
    let videoTrailer =
      this.movie?.videos?.results?.filter(
        (video) => video?.type == 'Trailer' || video?.type == 'Teaser'
      )[0] || null;
    this.videoUrl = this.getVideoUrl(videoTrailer!) || '';
  }
  getVideoUrl(video: Video): string {
    if (video?.site == 'YouTube') {
      return `https://www.youtube.com/embed/${video?.key}?enablejsapi=1&mute=0&autoplay=1`;
    } else {
      return `https://player.vimeo.com/video/${video?.key}?autoplay=1`;
    }
  }

  togglePlay() {
    this.playVideo = !this.playVideo;
  }
}
