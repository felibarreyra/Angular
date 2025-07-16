import { TestBed } from '@angular/core/testing';

import { BootData } from './boot-data';

describe('BootData', () => {
  let service: BootData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BootData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
