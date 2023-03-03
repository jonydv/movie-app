import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { InterceptorsModule } from './interceptors/interceptors.module';
import { FooterModule } from './shared/footer/footer.module';
import { HeaderModule } from './shared/header/header.module';
import { SpinnerWithBackdropModule } from './shared/spinner-with-backdrop/spinner-with-backdrop.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        InterceptorsModule,
        HeaderModule,
        HttpClientModule,
        SpinnerWithBackdropModule,
        FooterModule,
      ],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
