import { Component, OnInit } from '@angular/core';
import { CampaignService } from './campaign.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AddCampaignComponent } from './add-campaign/add-campaign.component';
import { CellEditCampaignComponent } from './cell/edit.component';
import { GridOptions } from 'ag-grid-community';
import { CellDeleteCampaignComponent } from './cell/delete.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  columnDefs = [
    { field: 'campaignID', headerName: 'ID' },
    { field: 'campaignName', headerName: 'Name' },
    { field: 'startDate', headerName: 'Start Date' },
    { field: 'endDate', headerName: 'End Date' },
    { field: "edit", headerName: "", cellRendererFramework: CellEditCampaignComponent },
    { field: "delete", headerName: "", cellRendererFramework: CellDeleteCampaignComponent },
    
  ];
  rowData = [];
  gridApi;
  gridColumnApi;
  bsModalRef: BsModalRef;
  gridOptions = <GridOptions>{
    context: {
      componentParent: this
    }
  };
  constructor(private campaignService: CampaignService, private modalService: BsModalService) { }

  ngOnInit(): void {
  }
  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.getData();
  }
  getData(){
    this.campaignService.getCampaigns().subscribe((data: any[]) => {
      this.rowData = data;
    })
  }
  add() {
    const initialState = {
      title: 'Add Campaign'
    };
    this.bsModalRef = this.modalService.show(AddCampaignComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Save';
    this.bsModalRef.onHidden.subscribe(()=>{
      this.getData();
    });
  }
  edit(campaign) {
    const initialState = {
      title: 'Edit Campaign',
      editCampaignData: campaign
    };
    this.bsModalRef = this.modalService.show(AddCampaignComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Update';
    this.bsModalRef.onHidden.subscribe(()=>{
      this.getData();
    });
  }
  delete(campaign) {
    this.campaignService.deleteCampaign(campaign).subscribe(()=>{
      this.getData();
    });
  }
}
