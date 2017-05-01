/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ActionServiceService } from './action-service.service';

describe('ActionServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActionServiceService]
    });
  });

  it('should ...', inject([ActionServiceService], (service: ActionServiceService) => {
    expect(service).toBeTruthy();
  }));
});
