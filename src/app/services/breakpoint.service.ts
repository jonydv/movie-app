import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';

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
    this.calls++;
    let observable = this.breakpointObserver
      .observe([this.mobileBreakpoint])
      .pipe(map((state: BreakpointState) => state.matches));
    if (this.calls == 1) {
      observable = observable.pipe(startWith(true)); // only add startWith() for first call to this method for server-side rendering purpose
    }

    return observable;
  }
}
