import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchboxComponent } from './searchbox.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchResultItemComponent } from './search-result-item/search-result-item.component';

@NgModule({
  declarations: [SearchboxComponent, SearchResultItemComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [SearchboxComponent],
})
export class SearchboxModule {}
