import { Component, OnInit } from '@angular/core';
import { CampaignService } from './campaign.service';

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
  constructor(private campaignService:CampaignService) { }

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

}
