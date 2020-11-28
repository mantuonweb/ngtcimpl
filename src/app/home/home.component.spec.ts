import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { SharedModule } from '../shared/shared.module';
import { CampaignService } from './campaign.service';

import { HomeComponent } from './home.component';
var campData:any[] = [{ "campaign_id": "My campaign ID", "campaign_name": "February 2020", "start_date": "2020-02-01", "end_date": "2020-02-29" }, { "campaign_id": "My campaign ID2", "campaign_name": "March 2020", "start_date": "2020-03-01", "end_date": "2020-03-31" }];
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const mockCampaignService = {
    getCampaigns:()=>{
      return of(campData);
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[SharedModule,RouterTestingModule],
      declarations: [HomeComponent],
      providers:[
        { provide: CampaignService, useValue: mockCampaignService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should Load Data', (done) => {
    component.ngOnInit();
    component.onGridReady({});
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      done();
      expect(component.rowData.length).toBe(2);
    });
  });
});
