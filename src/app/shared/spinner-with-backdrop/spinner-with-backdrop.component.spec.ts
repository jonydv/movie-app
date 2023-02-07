import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerWithBackdropComponent } from './spinner-with-backdrop.component';

describe('SpinnerWithBackdropComponent', () => {
  let component: SpinnerWithBackdropComponent;
  let fixture: ComponentFixture<SpinnerWithBackdropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerWithBackdropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinnerWithBackdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
