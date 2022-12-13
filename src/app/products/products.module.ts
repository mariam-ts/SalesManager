import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { ProductsComponent } from "./products.component";
import { EditComponent } from './edit/edit.component';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductManagementService } from "@app/shared/store/services/products.service";

@NgModule({
  declarations: [ProductsComponent, EditComponent],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductsComponent
      },
      {
        path: 'new',
        component: EditComponent,
      },
      {
        path: ':productId',
        component: EditComponent
      }]),
  ],
  providers: [ ProductManagementService ]
})
export class ProductsModule { }
