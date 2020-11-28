import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AddCampaignComponent } from './add-campaign.component';

describe('AddCampaignComponent', () => {
  let component: AddCampaignComponent;
  let fixture: ComponentFixture<AddCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCampaignComponent ],
      providers:[
        {
          provide:BsModalRef,useValue:{}
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
