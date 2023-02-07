import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  setLoading(value: boolean) {
    this.loading$.next(value);
  }

  getLoading(): Observable<boolean> {
    return this.loading$.asObservable();
  }
}
