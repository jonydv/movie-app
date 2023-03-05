import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { debounceTime, map, startWith, tap } from 'rxjs/operators';

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
  private calls: number = 0;
  constructor(private breakpointObserver: BreakpointObserver) {}

  isMobile(): Observable<boolean> {
    const isSSR = typeof window === 'undefined';
    this.calls++;
    let observable = this.breakpointObserver
      .observe([this.mobileBreakpoint])
      .pipe(
        map((state: BreakpointState) =>
          //This ternary is for the first call to the method and if the app is in server side rendering, to get in default mobile styles
          this.calls == 1 && isSSR
            ? this.initialBreakpointState.matches
            : state.matches
        )
      );

    return observable;
  }
}
