import { Component, Input, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, map, mergeMap, Observable, of, Subject, switchMap, tap } from 'rxjs';
import { ColumnComponent } from '@app/shared/table/columns/column-component';
import { SortService } from '@app/shared/table/sort.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> {

  constructor(private sort: SortService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatTable, { static: true })
  public table: MatTable<T>;

  @Input() public displayedColumns: string[];

  @Input()
  public set data(data: T[]) {
    if (undefined === data) {
      this.data$ = of([]);
    }
    this.data$ = of(data);
  }

  get data$(): Observable<T[]> {
    return this._data$;
  }

  @Input()
  public set data$(data: Observable<T[]>) {
    this._data$ = data;
    this.refresh$$.next();
  };
  private _data$: Observable<T[]> = of([]);
  private readonly refresh$$ = new BehaviorSubject<void>(undefined);
  private dataSource: MatTableDataSource<T>;

  @Input()
  public paginate: boolean = true;

  @Input()
  public set disableClientControls(isDisabled: boolean) {
    this.disableClientControls$$.next(isDisabled);
  }
  private disableClientControls$$ = new BehaviorSubject<boolean>(false);
  public matTableData = new MatTableDataSource<T>();

  public dataSource$: Observable<MatTableDataSource<T>> =
    of(this.matTableData)
      .pipe(
        switchMap(dataSource => this.refresh$$
          .pipe(switchMap(() => this.data$))
          .pipe(tap(data => {
            dataSource.data = data;
            this.dataSource = dataSource;
          }))
          .pipe(map(() => dataSource))
        )
      );

  public registerColumn(column: ColumnComponent<any>) {
    this.table.addColumnDef(column.columnDef)
  }

  public unregisterColumn(column: ColumnComponent<any>): void {
    this.table.removeColumnDef(column.columnDef);
  }

  public sortColumn(column: ColumnComponent<any>) {
    this.sort.update(column.name);
  }

  public applyFilter(event: KeyboardEvent) {
    var value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
  }
}
