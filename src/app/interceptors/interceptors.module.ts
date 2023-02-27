import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiRequestInterceptor } from './api-request.interceptor';
import { AuthTokenInterceptor } from './auth-token.interceptor';
import { ErrorInterceptor } from './error.interceptor';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: AuthTokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: ApiRequestInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: ErrorInterceptor,
      multi: true,
    },
  ],
})
export class InterceptorsModule {}
