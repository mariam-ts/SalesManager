import { ActionReducerMap } from '@ngrx/store';
import { productReducer } from './reducers/product.reducer';

export default {
  products: productReducer,
} as ActionReducerMap<any>;
