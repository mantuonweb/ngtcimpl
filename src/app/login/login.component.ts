import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { merge } from 'rxjs';
import { ScriptLoaderService } from '../load-script.service';
declare const gapi;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  gLoaded= false;
  constructor(private loadScript: ScriptLoaderService, private _ngZone: NgZone,private router:Router) { }
  ngOnInit(): void {
    let gAPI$ = this.loadScript.load({
      name: "google-signin-api",
      src: 'https://apis.google.com/js/api.js',
      loaded: false
    });
    let gPlateForm$ = this.loadScript.load({
      name: "google-signin-plateform",
      src: 'https://apis.google.com/js/platform.js',
      loaded: false
    });
    merge(gAPI$, gPlateForm$).subscribe((e) => {
      console.log(e);
      gapi.load('auth2', () => {
        gapi.auth2.init({
          "client_id": '931487578639-52rhohr1rqcm5palsbeg5tpetbd0bkrm.apps.googleusercontent.com'
        }).then(() => {
          this.renderInButton();
        })
      })
    });
  }

  renderInButton() {
    gapi.signin2.render('google-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': this.onSuccess.bind(this),
      'onfailure': this.onFailure.bind(this)
    });
    this._ngZone.run(()=>{
      this.gLoaded = true;
    })
  }
  onSuccess() {
    this._ngZone.run(()=>{
      this.router.navigate(['./home']);
    })
  }
  onFailure() {

  }
}
