import { Input, OnDestroy, OnInit, ViewChild, Directive } from '@angular/core';
import { CdkCellDef, CdkColumnDef, CdkHeaderCellDef } from '@angular/cdk/table';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { TableComponent } from '../table.component';
import * as dot from 'dot-object';

@Directive()
export abstract class ColumnComponent<T> implements OnInit, OnDestroy {
  @ViewChild(CdkColumnDef, { static: true })
  public columnDef: CdkColumnDef;

  @ViewChild(CdkCellDef, { static: true })
  public cell: CdkCellDef;

  @ViewChild(CdkHeaderCellDef, { static: true })
  public headerCell: CdkHeaderCellDef;

  @Input()
  public name: string;

  @Input()
  public searchable: BooleanInput;

  @Input()
  public sortable: BooleanInput;

  @Input()
  public headerText: string;

  @Input()
  public accessor: string | ((a:T) => any);

  public constructor(
    public table: TableComponent<any>
  ) {
  }

  public ngOnInit(): void {
    this.columnDef.name = this.name;
    this.columnDef.cell = this.cell;
    this.columnDef.headerCell = this.headerCell;
    this.searchable = coerceBooleanProperty(this.searchable);
    this.sortable = coerceBooleanProperty(this.sortable);
    this.table.registerColumn(this);
  }

  public sort() {
    this.table.sortColumn(this);
  }

  public ngOnDestroy(): void {
    this.table.unregisterColumn(this);
  }

  public access(data: T): any {
    if ('function' === typeof this.accessor) {
      return this.accessor(data);
    }

    return dot.pick(this.accessor || this.name, data);
  }
}
