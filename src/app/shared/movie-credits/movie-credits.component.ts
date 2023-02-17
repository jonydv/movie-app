import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Credits } from '../../interfaces/movie-detail.interface';

@Component({
  selector: 'app-movie-credits',
  templateUrl: './movie-credits.component.html',
  styleUrls: ['./movie-credits.component.scss'],
})
export class MovieCreditsComponent {
  @Input() credits: Credits | null = null;
  castTitle: string = 'Cast';
  castLink: string = 'View all ';
  baseImageUrl: string = `${environment.baseImageUrl}w300/`;
  profileUrl: string = '../../../assets/images/user.jpg';
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.credits);
  }
}
