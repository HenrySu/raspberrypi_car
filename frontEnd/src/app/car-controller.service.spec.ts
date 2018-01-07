import { TestBed, inject } from '@angular/core/testing';

import { CarControllerService } from './car-controller.service';

describe('CarControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarControllerService]
    });
  });

  it('should be created', inject([CarControllerService], (service: CarControllerService) => {
    expect(service).toBeTruthy();
  }));
});
