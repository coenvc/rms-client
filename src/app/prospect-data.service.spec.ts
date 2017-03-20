/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProspectDataService } from './prospect-data.service';

describe('ProspectDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProspectDataService]
    });
  });

  it('should ...', inject([ProspectDataService], (service: ProspectDataService) => {
    expect(service).toBeTruthy();
  }));
});
