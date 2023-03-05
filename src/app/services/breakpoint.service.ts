import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BreakpointService {
  mobileBreakpoint: string = '(max-width: 992px)';
  initialBreakpointState: BreakpointState = {
    matches: true,
    breakpoints: {
      '(max-width: 992px)': true,
    },
  };
  constructor(private breakpointObserver: BreakpointObserver) {}

  isMobile(): Observable<boolean> {
    const isSSR = typeof window === 'undefined';
    let observable = this.breakpointObserver
      .observe([this.mobileBreakpoint])
      .pipe(map((state: BreakpointState) => state.matches));
    if (isSSR) {
      observable = observable.pipe(startWith(true)); // only add startWith() for server-side rendering
    }

    return observable;
  }
}
