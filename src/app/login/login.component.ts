import { Component, OnInit } from '@angular/core';
import { ScriptLoaderService } from '../load-script.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private loadScript:ScriptLoaderService) { }
  ngOnInit(): void {
  }
}
