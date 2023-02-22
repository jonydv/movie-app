import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { LoadingService } from '../services/loading.service';

@Injectable({ providedIn: 'root' })
export class ApiRequestInterceptor implements HttpInterceptor {
  private _activeRequest = 0;
  constructor(private loadingService: LoadingService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this._activeRequest === 0) {
      this.loadingService.setLoading(true);
    }
    this._activeRequest++;

    return next.handle(request).pipe(finalize(() => this._stopLoading()));
  }

  private _stopLoading() {
    this._activeRequest--;
    if (this._activeRequest === 0) {
      this.loadingService.setLoading(false);
    }
  }
}
