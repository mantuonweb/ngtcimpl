import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { environment } from '../../environments/environment';

import { CampaignService } from './campaign.service';

describe('CampaignService', () => {
  let service: CampaignService;
  const mockHttp = {
    get:()=>{

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
  it('should be created 1', () => {
    let serviceInc:any = service;
    spyOn(serviceInc.http,'get');
    service.getCampaigns();
    let url = environment.serverURL
    expect(serviceInc.http.get).toHaveBeenCalledWith(url+"/"+"campaigns");
  });
});
