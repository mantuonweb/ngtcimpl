import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
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
  constructor(public bsModalRef: BsModalRef,private fb: FormBuilder,private campaignService:CampaignService) {}
 
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
        this.bsModalRef.hide();
      });
    }
    else{
      this.campaignService.saveCampaign(this.campaignForm.value).subscribe(()=>{
        this.bsModalRef.hide();
      });
    }

  }
}
