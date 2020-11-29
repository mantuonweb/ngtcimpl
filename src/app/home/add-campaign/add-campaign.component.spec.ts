import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AddCampaignComponent } from './add-campaign.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { CampaignService } from '../campaign.service';
import { of } from 'rxjs';
describe('AddCampaignComponent', () => {
  let component: AddCampaignComponent;
  let fixture: ComponentFixture<AddCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule],
      declarations: [ AddCampaignComponent ],
      providers:[
        {
          provide:BsModalRef,useValue:{hide(){}}
        },{
          provide:CampaignService,
          useValue:{updateCampaign:()=>{
            return of({})
          },saveCampaign:()=>{
            return of({})
          }}
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('Should Open in Edit Mode', () => {
    let campaign = { "campaignID": "My campaign ID", "campaignName": "February 2020", "startDate": "2020-02-01", "endDate": "2020-02-29" };
    component.editCampaignData = campaign;
    component.ngOnInit();
    fixture.detectChanges();
    let button = fixture.nativeElement.querySelector('button.btn-primary');
    expect(button.textContent).toBeTruthy("Update");
  });

  it('should close modal', () => {
    component.ngOnInit();
    fixture.detectChanges();
    spyOn(component.bsModalRef,'hide');
    component.close();
    expect(component.bsModalRef.hide).toHaveBeenCalled();
  });

  it('Should Update', () => {
    let campaign = { "campaignID": "My campaign ID", "campaignName": "February 2020", "startDate": "2020-02-01", "endDate": "2020-02-29" };
    component.editCampaignData = campaign;
    component.ngOnInit();
    fixture.detectChanges();
    let button = fixture.nativeElement.querySelector('button.btn-primary');
    component.save();
    fixture.detectChanges();
    expect(button.textContent).toBeTruthy("Update");
  });
  it('Should Add', () => {
    // let campaign = { "campaignID": "My campaign ID", "campaignName": "February 2020", "startDate": "2020-02-01", "endDate": "2020-02-29" };
    // component.editCampaignData = campaign;
    component.ngOnInit();
    fixture.detectChanges();
    let button = fixture.nativeElement.querySelector('button.btn-primary');
    component.save();
    fixture.detectChanges();
    expect(button.textContent).toBeTruthy("Save");
  });
});
