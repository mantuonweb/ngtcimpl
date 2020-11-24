import { fakeAsync, flush, TestBed } from '@angular/core/testing';
import { ScriptLoaderService } from './load-script.service';
describe('LoadScriptService', () => {
  let service: ScriptLoaderService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScriptLoaderService]
    });
    service = TestBed.inject(ScriptLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Load Script Should Load Success No Script preloaded', () => {
    let loadObj: any = {
      onload() { },
      onerror() { }
    };
    let getElementsByTagNameMock: any = [{
      appendChild() { }
    }];
    spyOn(window.document, 'getElementsByTagName').and.returnValue(getElementsByTagNameMock);
    spyOn(window.document, 'createElement').and.returnValue(loadObj);
    service.load({
      name: "google-signin-plateform",
      src: 'https://apis.google.com/js/platform.js',
      loaded: false
    }).subscribe();
    loadObj.onload();
    expect(service).toBeTruthy();
  });

  it('Load Script Should Load Success Script preloaded', () => {
    let loadObj: any = {
      onload() { },
      onerror() { }
    };
    let getElementsByTagNameMock: any = [{
      appendChild() { }
    }];
    spyOn(window.document, 'getElementsByTagName').and.returnValue(getElementsByTagNameMock);
    spyOn(window.document, 'createElement').and.returnValue(loadObj);
    service.load({
      name: "google-signin-plateform",
      src: 'https://apis.google.com/js/platform.js',
      loaded: false
    }).subscribe(() => {
      service.load({
        name: "google-signin-plateform",
        src: 'https://apis.google.com/js/platform.js',
        loaded: false
      }).subscribe();
    });

    loadObj.onload();
    expect(service).toBeTruthy();
  });
  it('Load Script Should Load Error', () => {
    let loadObj: any = {
      onload() { },
      onerror() { }
    };
    let getElementsByTagNameMock: any = [{
      appendChild() { }
    }];
    spyOn(window.document, 'getElementsByTagName').and.returnValue(getElementsByTagNameMock);
    spyOn(window.document, 'createElement').and.returnValue(loadObj);
    service.load({
      name: "google-signin-plateform",
      src: 'https://apis.google.com/js/platform.js',
      loaded: false
    }).subscribe();
    loadObj.onerror();
    expect(service).toBeTruthy();
  });
});
