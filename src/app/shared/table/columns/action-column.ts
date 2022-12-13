import { Component, EventEmitter, forwardRef, Input, Output } from "@angular/core";
import { ColumnComponent } from "./column-component";

@Component({
  selector: 'app-table-column-action',
  templateUrl: './action-column.html',
  providers: [{provide: ColumnComponent, useExisting: forwardRef(() => TableColumnActionComponent)}],
})
export class TableColumnActionComponent<T> extends ColumnComponent<T> {
    @Input()
    action: string;

    @Output()
    actionClick: EventEmitter<any> = new EventEmitter<any>();
}
