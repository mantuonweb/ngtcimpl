import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { SharedModule } from '../shared/shared.module';
import { CampaignService } from './campaign.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HomeComponent } from './home.component';

var campData: any[] = [{ "campaignID": "My campaign ID", "campaignName": "February 2020", "startDate": "2020-02-01", "endDate": "2020-02-29" }, { "campaignID": "My campaign ID2", "campaignName": "March 2020", "startDate": "2020-03-01", "endDate": "2020-03-31" }];
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const mockCampaignService = {
    getCampaigns: () => {
      return of(campData);
    },
    deleteCampaign: () => {
      return of();
    }
  };

  const mockModalService = {
    content: {
      onSuccess: of(true)
    },
    show: () => {
      return {
        content: {
          onSuccess: of(true)
        }
      }
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
    let comp: any = component;
    comp.modalService.content.onSuccess = of(true);
    spyOn(comp.modalService, "show").and.returnValue({
      content: {
        onSuccess: of(true)
      },
      hide: () => { }
    });
    fixture.whenStable().then(() => {
      let button = fixture.nativeElement.querySelector('button.add-campaign');
      button.dispatchEvent(new Event('click'));
      expect(component.rowData.length).toBe(2);
      expect(comp.modalService.show).toHaveBeenCalled();
      done();
    });
  });
  it('should open Edit modal', (done) => {
    component.ngOnInit();
    component.onGridReady({});
    fixture.detectChanges();
    let comp: any = component;
    comp.modalService.content.onSuccess = of(true);
    spyOn(comp.modalService, "show").and.returnValue({
      content: {
        onSuccess: of(true)
      },
      hide: () => { }
    });
    fixture.whenStable().then(() => {
      let campaign = { "campaignID": "My campaign ID", "campaignName": "February 2020", "startDate": "2020-02-01", "endDate": "2020-02-29" };
      component.edit(campaign);
      // expect(component.rowData.length).toBe(2);
      expect(comp.modalService.show).toHaveBeenCalled();
      done();
    });
  });
  it('Should Delete Campaign', (done) => {
    let comp: any = component
    component.ngOnInit();
    component.onGridReady({});
    fixture.detectChanges();
    spyOn(comp.campaignService, 'deleteCampaign').and.returnValue(of({}));
    fixture.whenStable().then(() => {
      let campaign = { "campaignID": "My campaign ID", "campaignName": "February 2020", "startDate": "2020-02-01", "endDate": "2020-02-29" };
      component.delete(campaign);
      // component.refreshData(false)
      expect(comp.campaignService.deleteCampaign).toHaveBeenCalled();
      done();
    });
  });
  it('Should Not Reftresh', (done) => {
    let comp: any = component
    component.ngOnInit();
    component.onGridReady({});
    fixture.detectChanges();
    spyOn(component,'getData')
    fixture.whenStable().then(() => {
      component.refreshData(false)
      expect(comp.getData).toHaveBeenCalledTimes(1);
      done();
    });
  });
});
