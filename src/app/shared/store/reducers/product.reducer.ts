import { Product } from '@app/products/product.model';
import * as ProductManagementActions from '../actions/product.actions';
import { defaultProductsState } from '../app.state';

export type Action = ProductManagementActions.ProductManagementActions;

export function productReducer(state: Product[] = defaultProductsState, action: Action) {
    switch (action.type) {
        case ProductManagementActions.ADD_PRODUCT:
            return state.push(action.payload)
        case ProductManagementActions.REMOVE_PRODUCT:
            return state.filter((obj) => obj.id !== action.payload);
        case ProductManagementActions.UPDATE_PRODUCT:
            {
                var newState = state.filter((obj) => obj.id !== action.payload.id);
                newState.push(action.payload)
                return newState
            }
        case ProductManagementActions.UPDATE_PRODUCTS:
            return action.payload
        default:
            return state;
    }
}
