import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerWithBackdropComponent } from './spinner-with-backdrop.component';
import { LoadingService } from '../../services/loading.service';
import { ScrollLockService } from '../../services/scroll-lock.service';
import { SpinnerComponent } from './spinner/spinner.component';

describe('SpinnerWithBackdropComponent', () => {
  let component: SpinnerWithBackdropComponent;
  let fixture: ComponentFixture<SpinnerWithBackdropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpinnerWithBackdropComponent, SpinnerComponent],
      providers: [LoadingService, ScrollLockService],
    }).compileComponents();

    fixture = TestBed.createComponent(SpinnerWithBackdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
