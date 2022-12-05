import { Input } from "@angular/core";
import { Component, forwardRef } from "@angular/core";
import { ColumnComponent } from "./column-component";
import { currency } from "@app/shared/models/currency";

@Component({
  selector: 'app-table-column-money',
  templateUrl: './money-column.html',
  providers: [{provide: ColumnComponent, useExisting: forwardRef(() => TableColumnMoneyComponent)}],
})
export class TableColumnMoneyComponent<T> extends ColumnComponent<T> {
  @Input()
  currency = currency.USD;
}
