import { TestBed } from '@angular/core/testing';

import { Bootcart } from './bootcart';

describe('Bootcart', () => {
  let service: Bootcart;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Bootcart);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
