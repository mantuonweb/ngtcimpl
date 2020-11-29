import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from './../../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { CellEditCampaignComponent } from './edit.component';
describe('CellEditCampaignComponent', () => {
  let component: CellEditCampaignComponent;
  let fixture: ComponentFixture<CellEditCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule],
      declarations: [ CellEditCampaignComponent ],
      providers:[
    
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellEditCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    let campaign = { "campaignID": "My campaign ID", "campaignName": "February 2020", "startDate": "2020-02-01", "endDate": "2020-02-29" };
    let params = {
        context:{
            componentParent:{
                edit:()=>{

                }
            }
        },
        node:{
            data:campaign
        }
    }
    component.agInit(params);
    spyOn(component.params.context.componentParent,"edit");
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(!component.refresh()).toBeTruthy();
    component.edit();
    expect(component.params.context.componentParent.edit).toHaveBeenCalled();
  });
 
});