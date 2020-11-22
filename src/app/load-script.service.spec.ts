import { TestBed } from '@angular/core/testing';

import { ScriptLoaderService } from './load-script.service';

describe('LoadScriptService', () => {
  let service: ScriptLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScriptLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
