import { Product } from '@app/products/product.model';
import { Action } from '@ngrx/store';

export const ADD_PRODUCT = '[Post] AddProduct';
export const REMOVE_PRODUCT = '[Post] RemoveProduct';
export const UPDATE_PRODUCT = '[Post] UpdateProduct';
export const UPDATE_PRODUCTS = '[Post] UpdateProducts';

export class addProduct implements Action {
    readonly type = ADD_PRODUCT;
    constructor(public payload: Product) { }
}
export class removeProduct implements Action {
    readonly type = REMOVE_PRODUCT;
    constructor(public payload: number) { }
}
export class updateProduct implements Action {
    readonly type = UPDATE_PRODUCT;
    constructor(public payload: Product) { }
}

export class updateProducts implements Action {
    readonly type = UPDATE_PRODUCTS;
    constructor(public payload: Product[]) { }
}

export type ProductManagementActions = addProduct | removeProduct | updateProduct | updateProducts;

