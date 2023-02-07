import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoadingService } from '../../services/loading.service';
import { ScrollLockService } from '../../services/scroll-lock.service';

@Component({
  selector: 'app-spinner-with-backdrop',
  templateUrl: './spinner-with-backdrop.component.html',
  styleUrls: ['./spinner-with-backdrop.component.scss'],
})
export class SpinnerWithBackdropComponent {
  loading$: Observable<boolean> = this.loadingService.getLoading().pipe(
    tap((loading) => {
      if (loading) {
        this.scrollLockService.lock();
      } else {
        this.scrollLockService.unlock();
      }
    })
  );
  constructor(
    private loadingService: LoadingService,
    private scrollLockService: ScrollLockService
  ) {}
}
