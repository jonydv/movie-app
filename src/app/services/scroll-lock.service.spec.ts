import { TestBed } from '@angular/core/testing';

import { ScrollLockService } from './scroll-lock.service';

describe('ScrollLockService', () => {
  let service: ScrollLockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollLockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add the "lock" class to the body element', () => {
    // Act
    service.lock();

    // Assert
    expect(document.body.classList.contains('lock')).toBe(true);
  });

  it('should remove the "lock" class from the body element', () => {
    // Arrange
    service.lock();

    // Act
    service.unlock();

    // Assert
    expect(document.body.classList.contains('lock')).toBe(false);
  });

  it('should toggle the "lock-scroll" class on the body element based on the isVisible parameter', () => {
    // Act
    service.handleLockBodyScroll(true);

    // Assert
    expect(document.body.classList.contains('lock-scroll')).toBe(true);

    // Act
    service.handleLockBodyScroll(false);

    // Assert
    expect(document.body.classList.contains('lock-scroll')).toBe(false);
  });
});
