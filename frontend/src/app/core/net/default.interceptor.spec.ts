import { TestBed } from '@angular/core/testing';

import { DefaultInterceptor } from './default.interceptor';

describe('DefaultInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      DefaultInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: DefaultInterceptor = TestBed.inject(DefaultInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
