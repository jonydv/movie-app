import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss'],
})
export class ScrollToTopComponent {
  showScrollButton: boolean = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const position =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.showScrollButton = position >= window.innerHeight / 2;
  }

  constructor(@Inject(DOCUMENT) private document: Document) {}

  scrollToTop(): void {
    this.document.documentElement.scrollTop = 0;
  }
}
