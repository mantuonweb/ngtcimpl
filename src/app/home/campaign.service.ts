import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable()
export class CampaignService {
  private baseURL = environment.serverURL
  constructor(private http: HttpClient) {

  }
  getURL(url) {
    return [this.baseURL, url].join("/");
  }
  getCampaigns() {
    return this.http.get(this.getURL("campaigns"));
  }
}
