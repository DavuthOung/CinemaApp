import BaseNavigation from "../../../navigation/BaseNavigation";
import CartScreen from "../screen";
export class CartNavigations extends BaseNavigation {
    constructor(){
        super();
        this.screens = {
            Cart: CartScreen,
        };
        return this.render();
    }
}