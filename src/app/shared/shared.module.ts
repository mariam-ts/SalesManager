import { NgModule } from '@angular/core';
import { MaterialModule } from '../modules/material.module';
import { TableModule } from './table/table.module';

@NgModule({
  declarations:[
  ],
  imports:[
    MaterialModule,
    TableModule
  ],
  exports:[MaterialModule, TableModule]
})
export class SharedModule { }
