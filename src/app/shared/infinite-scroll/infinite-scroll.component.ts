import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/scrolling';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss'],
})
export class InfiniteScrollComponent implements OnInit {
  @Input() totalPages: number = 1;
  @Input() fetchData: ((page: number) => Promise<any>) | null = null;
  @Output() results: EventEmitter<any> = new EventEmitter();
  private currentPage = 1;
  public loading = false;
  private unsubscribe$ = new Subject<void>();

  constructor(private scrollDispatcher: ScrollDispatcher) {}

  ngOnInit() {
    this.scrollDispatcher
      .scrolled()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((cdk: CdkScrollable | any) => {
        console.log(cdk);
        const bottom =
          cdk?.getElementRef()?.nativeElement?.scrollHeight -
          cdk?.getElementRef()?.nativeElement?.clientHeight;
        if (
          cdk?.measureScrollOffset('bottom') === bottom &&
          this.currentPage < this.totalPages
        ) {
          this.loadMore();
        }
      });
  }

  loadMore() {
    this.loading = true;
    this.fetchData!(this.currentPage).then((data) => {
      this.currentPage++;
      this.loading = false;
      this.results.emit(data);
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
