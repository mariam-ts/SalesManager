import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '@app/shared/table/table.component';
import { MaterialModule } from 'src/app/modules/material.module';
import { SortService } from '@app/shared/table/sort.service';
import { TableColumnTextComponent } from '@app/shared/table/columns/text-column';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TableColumnMoneyComponent } from './columns/money-column';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    TableComponent,
    TableColumnTextComponent,
    TableColumnMoneyComponent
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
    TableColumnMoneyComponent
  ]
})
export class TableModule { }
