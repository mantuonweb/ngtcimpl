import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AddCampaignComponent } from './add-campaign.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { CampaignService } from '../campaign.service';
describe('AddCampaignComponent', () => {
  let component: AddCampaignComponent;
  let fixture: ComponentFixture<AddCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule],
      declarations: [ AddCampaignComponent ],
      providers:[
        {
          provide:BsModalRef,useValue:{}
        },{
          provide:CampaignService,
          useValue:{}
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
});
