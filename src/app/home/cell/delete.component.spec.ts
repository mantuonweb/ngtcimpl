import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CellDeleteCampaignComponent } from './delete.component';
import { SharedModule } from './../../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
describe('CellDeleteCampaignComponent', () => {
  let component: CellDeleteCampaignComponent;
  let fixture: ComponentFixture<CellDeleteCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule],
      declarations: [ CellDeleteCampaignComponent ],
      providers:[
    
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellDeleteCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    let campaign = { "campaignID": "My campaign ID", "campaignName": "February 2020", "startDate": "2020-02-01", "endDate": "2020-02-29" };
    let params = {
        context:{
            componentParent:{
                delete:()=>{

                }
            }
        },
        node:{
            data:campaign
        }
    }
    component.agInit(params);
    spyOn(component.params.context.componentParent,"delete");
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(!component.refresh()).toBeTruthy();
    component.delete();
    expect(component.params.context.componentParent.delete).toHaveBeenCalled();
  });
 
});
