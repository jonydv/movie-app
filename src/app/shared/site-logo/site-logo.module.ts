import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteLogoComponent } from './site-logo.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SiteLogoComponent],
  imports: [CommonModule, RouterModule],
  exports: [SiteLogoComponent],
})
export class SiteLogoModule {}
