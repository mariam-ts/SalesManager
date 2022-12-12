import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '@app/shared/table/table.component';
import { MaterialModule } from '@app/shared/modules/material.module';
import { SortService } from '@app/shared/table/sort.service';
import { TableColumnTextComponent } from '@app/shared/table/columns/text-column';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TableColumnMoneyComponent } from './columns/money-column';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TableColumnDateComponent } from './columns/date-column';


@NgModule({
  declarations: [
    TableComponent,
    TableColumnTextComponent,
    TableColumnMoneyComponent,
    TableColumnDateComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatTooltipModule,
    MatPaginatorModule
  ],
  providers: [SortService],
  exports: [
    TableComponent,
    TableColumnTextComponent,
    TableColumnMoneyComponent,
    TableColumnDateComponent
  ]
})
export class TableModule { }
