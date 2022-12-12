import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagersComponent } from './managers.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { EditComponent } from './edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ManagersComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ManagersComponent
      },
      {
        path: 'new',
        component: EditComponent,
      },
      {
        path: ':managerId',
        component: EditComponent
      }]),
  ],
  exports: [
    ManagersComponent
  ]
})
export class ManagerModule { }
