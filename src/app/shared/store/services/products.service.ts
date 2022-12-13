import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppstate } from '../app.state';
import * as productsAction from '../actions/product.actions';
import { Product } from '@app/products/product.model';

@Injectable()
export class ProductManagementService {
  constructor(private _store: Store<IAppstate>) {}
  addProduct(product: Product) {
    this._store.dispatch(new productsAction.addProduct(product));
  }
  removeProduct(id: number) {
    this._store.dispatch(new productsAction.removeProduct(id));
  }
  updateProduct(product: Product){
    this._store.dispatch(new productsAction.updateProduct(product))
  }
  updateProductStore(products: Product []){
    this._store.dispatch(new productsAction.updateProducts(products))
  }
}
