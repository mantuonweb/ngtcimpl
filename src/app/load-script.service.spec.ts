import { TestBed } from '@angular/core/testing';
import { ScriptLoaderService } from './load-script.service';

// https://blog.angulartraining.com/how-to-write-unit-tests-for-angular-code-that-uses-the-httpclient-429fa782eb15
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

  it('Load Script Should Load Success No Script preloaded', (done) => {
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
    }).subscribe(()=>{
      expect(service).toBeTruthy();
      done();
    });
    loadObj.onload();
  });

  it('Load Script Should Load Success Script preloaded', (done) => {
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
      }).subscribe(()=>{
        expect(service).toBeTruthy();
        done();
      });
    });
    loadObj.onload();
  });
  
  it('Load Script Should Load Error', (done) => {
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
    }).subscribe(()=>{
      console.log('d');
    },()=>{
      expect(service).toBeTruthy();
      done();
    });
    loadObj.onerror();
  });
});
