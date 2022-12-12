import { Component, forwardRef } from "@angular/core";
import { ColumnComponent } from "./column-component";
import {format} from 'date-fns';

@Component({
  selector: 'app-table-column-date',
  templateUrl: './date-column.html',
  providers: [{provide: ColumnComponent, useExisting: forwardRef(() => TableColumnDateComponent)}],
})
export class TableColumnDateComponent<T> extends ColumnComponent<T> {

  public static readonly format: string = 'dd-MM-yyyy HH:mm:ss';

  public formatDate(value: any): string {
    if (undefined === value || null === value) {
      return '';
    }
    var dateValue = new Date(value);
    return format(dateValue, TableColumnDateComponent.format);
  }
}
