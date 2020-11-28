import { Component, OnInit } from '@angular/core';
import { CampaignService } from './campaign.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AddCampaignComponent } from './add-campaign/add-campaign.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  columnDefs = [
    { field: 'campaign_id', headerName: 'ID' },
    { field: 'campaign_name',headerName: 'Name' },
    { field: 'start_date',headerName: 'Start Date' },
    { field: 'end_date',headerName: 'End Date' }
  ];
  rowData = [];
  gridApi;
  gridColumnApi;
  bsModalRef: BsModalRef;
  constructor(private campaignService:CampaignService,private modalService: BsModalService) { }

  ngOnInit(): void {
  }
  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.campaignService.getCampaigns().subscribe((data:any[])=>{
      this.rowData = data;
    })
  }
  add(){
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(AddCampaignComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
