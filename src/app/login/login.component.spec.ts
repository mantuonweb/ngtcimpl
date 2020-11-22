import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';

import { ScriptLoaderService } from '../load-script.service';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const mockScriptLoader={
    load:()=>{
      return of({});
    }
  }
  //https://angular.io/guide/dependency-injection-providers
  beforeEach(async(() => {
    window['gapi'] = {
      load(param,cb) {
        cb && cb();
      },
      ["auth2"]:{
        init:()=>{
          return Promise.resolve();
        }
      },
      ["signin2"]:{
        render:()=>{
          return Promise.resolve();
        }
      }
    }
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [ LoginComponent ],
      providers:[
        { provide: ScriptLoaderService, useValue: mockScriptLoader }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render button Success', fakeAsync(() => {
    component.ngOnInit();
    spyOn(component.router, 'navigate').and.returnValue(Promise.resolve(true));
    tick(50);
    fixture.detectChanges();
    component.onSuccess();
    fixture.detectChanges();
    expect(component.gLoaded).toBeTruthy();
  }));
  it('should render button Failure', fakeAsync(() => {
    component.ngOnInit();
    spyOn(component.router, 'navigate').and.returnValue(Promise.resolve(true));
    tick(50);
    fixture.detectChanges();
    component.onFailure();
    fixture.detectChanges();
    expect(component.gLoaded).toBeTruthy();
  }));
});
