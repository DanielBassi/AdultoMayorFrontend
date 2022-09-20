/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SubindiceService } from './subindice.service';

describe('Service: Subindice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubindiceService]
    });
  });

  it('should ...', inject([SubindiceService], (service: SubindiceService) => {
    expect(service).toBeTruthy();
  }));
});
