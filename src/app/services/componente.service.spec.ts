/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ComponenteService } from './componente.service';

describe('Service: Componente', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponenteService]
    });
  });

  it('should ...', inject([ComponenteService], (service: ComponenteService) => {
    expect(service).toBeTruthy();
  }));
});
