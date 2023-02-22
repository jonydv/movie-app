import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from './shared/header/header.module';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerWithBackdropModule } from './shared/spinner-with-backdrop/spinner-with-backdrop.module';
import { InterceptorsModule } from './interceptors/interceptors.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    InterceptorsModule,
    HeaderModule,
    HttpClientModule,
    SpinnerWithBackdropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
