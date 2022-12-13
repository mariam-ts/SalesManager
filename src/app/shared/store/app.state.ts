import { Manager } from "@app/managers/manager.model";
import { Product } from "@app/products/product.model";


export var defaultProductsState = [];
export var defaultManagersState  = []

export interface IAppstate {
    products: Product [];
    managers: Manager [];
}
export function getInitialState(): IAppstate{
    return {
        products: defaultProductsState,
        managers: defaultManagersState
    }
}
