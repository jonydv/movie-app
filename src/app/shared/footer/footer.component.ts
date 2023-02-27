import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  footerText: string = 'All rights reserved ';
  developer: string = 'JDV Developer - Jonatan Villalba';
  developerUrl: string = 'https://jonatandvillalbaweb.com.ar/';

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
