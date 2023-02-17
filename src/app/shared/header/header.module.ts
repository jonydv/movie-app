import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { SearchboxModule } from '../searchbox/searchbox.module';
import { SiteLogoModule } from '../site-logo/site-logo.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, SearchboxModule, SiteLogoModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
