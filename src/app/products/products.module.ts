import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { TableModule } from "../shared/table/table.module";
import { ProductsComponent } from "./products.component";

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductsComponent
      }]),
  ]
})
export class ProductsModule { }
