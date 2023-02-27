import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // Manejar errores del cliente
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // Manejar errores del servidor
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        if (error.error['status_code'] == 34) {
          this.router.navigateByUrl('/not-found');
        }
        return throwError(errorMessage);
      })
    );
  }
}
