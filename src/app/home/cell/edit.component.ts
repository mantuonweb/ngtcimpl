import {Component} from "@angular/core";
import { ICellRendererAngularComp } from 'ag-grid-angular/lib/interfaces';


@Component({
    selector: 'cell-edit-campaign',
    template: `<span><button style="height: 20px" (click)="edit()" class="btn btn-info">Edit</button></span>`,
    styles: [
        `.btn {
            line-height: 0.5
        }`
    ]
})
export class CellEditCampaignComponent implements ICellRendererAngularComp {
    public params: any;

    agInit(params: any): void {
        this.params = params;
    }

    public edit() {
        this.params.context.componentParent.edit(this.params.node.data);
    }

    refresh(): boolean {
        return false;
    }
}