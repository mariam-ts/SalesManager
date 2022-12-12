import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material.module';
import { TableModule } from './table/table.module';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { components } from './components';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations:[
    ...components,
  ],
  imports:[
    MaterialModule,
    FormsModule,
    TableModule,
    RouterModule,
    CommonModule
  ],
  exports:[MaterialModule, TableModule, AppBarComponent, ...components]
})
export class SharedModule { }
