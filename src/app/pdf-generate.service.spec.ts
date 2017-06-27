import { TestBed, inject } from '@angular/core/testing';

import { PdfGenerateService } from './pdf-generate.service';

describe('PdfGenerateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PdfGenerateService]
    });
  });

  it('should be created', inject([PdfGenerateService], (service: PdfGenerateService) => {
    expect(service).toBeTruthy();
  }));
});
