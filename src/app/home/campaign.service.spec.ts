import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { environment } from '../../environments/environment';

import { CampaignService } from './campaign.service';

describe('CampaignService', () => {
  let service: CampaignService;
  const mockHttp = {
    get:()=>{

    },
    put:()=>{

    },
    post:()=>{

    },
    delete:()=>{

    }
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        { provide: HttpClient, useValue: mockHttp },
        CampaignService
      ]
    });
    service = TestBed.inject(CampaignService);
  });

  it('should be created 1', () => {
    expect(service).toBeTruthy();
  });
  it('should be call get campaigns', () => {
    let serviceInc:any = service;
    spyOn(serviceInc.http,'get');
    service.getCampaigns();
    let url = environment.serverURL
    expect(serviceInc.http.get).toHaveBeenCalledWith(url+"/"+"campaigns");
  });
  it('should be call add campaign', () => {
    let serviceInc:any = service;
    spyOn(serviceInc.http,'post');
    let campaign = { "campaignID": "My campaign ID", "campaignName": "February 2020", "startDate": "2020-02-01", "endDate": "2020-02-29" };
    service.saveCampaign(campaign);
    let url = environment.serverURL
    expect(serviceInc.http.post).toHaveBeenCalledWith(url+"/"+"campaign",campaign);
  });
  it('should be call edit campaign', () => {
    let serviceInc:any = service;
    spyOn(serviceInc.http,'put');
    let campaign = { "campaignID": "My campaign ID", "campaignName": "February 2020", "startDate": "2020-02-01", "endDate": "2020-02-29" };
    service.updateCampaign(campaign);
    let url = environment.serverURL
    expect(serviceInc.http.put).toHaveBeenCalledWith(url+"/"+"campaign",campaign);
  });
  it('should be call delete campaign', () => {
    let serviceInc:any = service;
    spyOn(serviceInc.http,'delete');
    let campaign = { "campaignID": "My campaign ID", "campaignName": "February 2020", "startDate": "2020-02-01", "endDate": "2020-02-29" };
    service.deleteCampaign(campaign);
    let url = environment.serverURL;

    expect(serviceInc.http.delete).toHaveBeenCalledWith(url+"/"+"campaign/"+campaign.campaignID);
  });
});
