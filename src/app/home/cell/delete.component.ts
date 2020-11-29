import {Component} from "@angular/core";
import { ICellRendererAngularComp } from 'ag-grid-angular/lib/interfaces';


@Component({
    selector: 'cell-edit-campaign',
    template: `<span><button style="height: 20px" (click)="delete()" class="btn btn-info">Delete</button></span>`,
    styles: [
        `.btn {
            line-height: 0.5
        }`
    ]
})
export class CellDeleteCampaignComponent implements ICellRendererAngularComp {
    public params: any;

    agInit(params: any): void {
        this.params = params;
    }

    public delete() {
        this.params.context.componentParent.delete(this.params.node.data);
    }

    refresh(): boolean {
        return false;
    }
}