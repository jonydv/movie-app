import { Component } from '@angular/core';
import { BreakpointService } from 'src/app/services/breakpoint.service';
import { ScrollLockService } from 'src/app/services/scroll-lock.service';
import { Observable } from 'rxjs';
import { Header } from '../interfaces/header.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMobile$: Observable<boolean> = this.breakpointService.isMobile();
  showNav: boolean = false;
  showSearchBox: boolean = false;
  navItems: Header[] = [
    { title: 'Home', link: '/' },

    { title: 'Movies', link: '/movies' },

    { title: 'Upcoming', link: '/upcoming' },
  ];
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
