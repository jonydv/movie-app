import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerWithBackdropComponent } from './spinner-with-backdrop.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [SpinnerWithBackdropComponent, SpinnerComponent],
  imports: [CommonModule],
  exports: [SpinnerWithBackdropComponent, SpinnerComponent],
})
export class SpinnerWithBackdropModule {}
