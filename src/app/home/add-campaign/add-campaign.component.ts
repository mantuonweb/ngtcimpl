import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs/internal/Subject';
import { CampaignService } from '../campaign.service';

@Component({
  selector: 'app-add-campaign',
  templateUrl: './add-campaign.component.html',
  styleUrls: ['./add-campaign.component.scss']
})
export class AddCampaignComponent implements OnInit {

  title: string;
  closeBtnName: string;
  campaignForm:FormGroup;
  editCampaignData;
  public onSuccess: Subject<boolean>;
  constructor(public bsModalRef: BsModalRef,private fb: FormBuilder,private campaignService:CampaignService) {
    this.onSuccess = new Subject();
  }
 
  ngOnInit() {
    this.campaignForm = this.fb.group({
      campaignID: [''],
      campaignName: [''],
      startDate: [''],
      endDate: [''],
    });
    if(this.editCampaignData){
      this.campaignForm.patchValue(this.editCampaignData)
    }
  }
  close(){
    this.bsModalRef.hide()
  }
  save(){
    if(this.editCampaignData){
      this.campaignService.updateCampaign(this.campaignForm.value).subscribe(()=>{
        this.onSuccess.next(true);
      });
    }
    else{
      this.campaignService.saveCampaign(this.campaignForm.value).subscribe(()=>{
        this.onSuccess.next(true);
      });
    }

  }
}
