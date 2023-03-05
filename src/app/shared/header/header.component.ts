import { Component } from '@angular/core';
import { BreakpointService } from 'src/app/services/breakpoint.service';
import { ScrollLockService } from 'src/app/services/scroll-lock.service';
import { Observable } from 'rxjs';
import { Header } from '../interfaces/header.interface';
import { IsActiveMatchOptions } from '@angular/router';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMobile$: Observable<boolean> = this.breakpointService
    .isMobile()
    .pipe(startWith(true));
  showNav: boolean = false;
  showSearchBox: boolean = false;
  navItems: Header[] = [
    { title: 'Home', link: '/' },

    { title: 'Movies', link: '/movies' },

    { title: 'Upcoming', link: '/upcoming' },
  ];
  readonly activeLinkOptions: IsActiveMatchOptions = {
    queryParams: 'subset',
    matrixParams: 'exact',
    paths: 'exact',
    fragment: 'exact',
  };
  constructor(
    private breakpointService: BreakpointService,
    private scrollLockService: ScrollLockService
  ) {}

  toggleShowNav() {
    this.showNav = !this.showNav;
    if (this.showNav) {
      this.scrollLockService.lock();
    } else {
      this.scrollLockService.unlock();
    }
  }

  toggleShowSearchbox() {
    this.showSearchBox = !this.showSearchBox;
  }

  closeSearch(event: boolean) {
    this.showSearchBox = false;
  }
}
