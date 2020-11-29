import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { CampaignService } from './campaign.service';
import { AddCampaignComponent } from './add-campaign/add-campaign.component';
import { FormBuilder } from '@angular/forms';
import { CellEditCampaignComponent } from './cell/edit.component';


@NgModule({
  declarations: [HomeComponent, AddCampaignComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  providers:[CampaignService,FormBuilder],
  entryComponents:[CellEditCampaignComponent,CellEditCampaignComponent]
})
export class HomeModule { }
