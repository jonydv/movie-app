import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchboxModule } from '../searchbox/searchbox.module';
import { SiteLogoModule } from '../site-logo/site-logo.module';

import { HeaderComponent } from './header.component';
import { BreakpointService } from '../../services/breakpoint.service';
import { ScrollLockService } from '../../services/scroll-lock.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let breakpoint: BreakpointService;
  let scroll: ScrollLockService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        SearchboxModule,
        SiteLogoModule,
      ],
      providers: [BreakpointService, ScrollLockService],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    breakpoint = TestBed.inject(BreakpointService);
    scroll = TestBed.inject(ScrollLockService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
