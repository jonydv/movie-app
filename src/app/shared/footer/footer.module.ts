import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { SiteLogoModule } from '../site-logo/site-logo.module';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, SiteLogoModule],
  exports: [FooterComponent],
})
export class FooterModule {}
