import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollComponent } from './infinite-scroll.component';
import {
  CdkScrollableModule,
  ScrollingModule,
  ScrollDispatcher,
} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [InfiniteScrollComponent],
  imports: [CommonModule, ScrollingModule, CdkScrollableModule],
  exports: [InfiniteScrollComponent],
  providers: [{ provide: ScrollDispatcher }],
})
export class InfiniteScrollModule {}
