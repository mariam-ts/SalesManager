import { Component, forwardRef } from "@angular/core";
import { ColumnComponent } from "./column-component";

@Component({
  selector: 'app-table-column-text',
  templateUrl: './text-column.html',
  providers: [{provide: ColumnComponent, useExisting: forwardRef(() => TableColumnTextComponent)}],
})
export class TableColumnTextComponent<T> extends ColumnComponent<T> {

}
