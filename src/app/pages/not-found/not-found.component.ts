import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  title: string = 'Oops... the resource was not found';
  paragraph: string = `Sorry, the page you were looking for is not available`;
  goHomeText: string = 'Go to the homepage';
  link: string = '/';
  imgUrl: string = '../../../assets/images/clapperboard.webp';
  imgAlt: string = 'Clapperboard vector';
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
