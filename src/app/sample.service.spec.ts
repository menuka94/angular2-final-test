import { TestBed, inject } from '@angular/core/testing';

import { SampleService } from './sample.service';

describe('SampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SampleService]
    });
  });

  it('should ...', inject([SampleService], (service: SampleService) => {
    expect(service).toBeTruthy();
  }));
});
