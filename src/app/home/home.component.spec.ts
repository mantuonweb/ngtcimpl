import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { SharedModule } from '../shared/shared.module';
import { CampaignService } from './campaign.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HomeComponent } from './home.component';

var campData: any[] = [{ "campaign_id": "My campaign ID", "campaign_name": "February 2020", "start_date": "2020-02-01", "end_date": "2020-02-29" }, { "campaign_id": "My campaign ID2", "campaign_name": "March 2020", "start_date": "2020-03-01", "end_date": "2020-03-31" }];
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const mockCampaignService = {
    getCampaigns: () => {
      return of(campData);
    }
  };

  const mockModalService = {
    show:()=>{

    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule],
      declarations: [HomeComponent],
      providers: [
        { provide: CampaignService, useValue: mockCampaignService },
        { provide: BsModalService, useValue: mockModalService }
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
    fixture.whenStable().then(() => {
      expect(component.rowData.length).toBe(2);
      done();
    });
  });
  it('should open Add modal', (done) => {
    component.ngOnInit();
    component.onGridReady({});
    fixture.detectChanges();
    let comp:any = component;
    spyOn(comp.modalService,"show")
    fixture.whenStable().then(() => {
      let button = fixture.nativeElement.querySelector('button.add-campaign');
      button.dispatchEvent(new Event('click'));
      expect(component.rowData.length).toBe(2);
      expect(comp.modalService.show).toHaveBeenCalled();
      done();
    });
  });


});
