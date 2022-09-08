/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EstadoActividadService } from './estadoActividad.service';

describe('Service: EstadoActividad', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstadoActividadService]
    });
  });

  it('should ...', inject([EstadoActividadService], (service: EstadoActividadService) => {
    expect(service).toBeTruthy();
  }));
});
