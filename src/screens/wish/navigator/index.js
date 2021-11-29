import BaseNavigation from "../../../navigation/BaseNavigation";
import WishScreen from "../screen";
export class WishNavigations extends BaseNavigation {
    constructor(){
        super();
        this.screens = {
            Wish: WishScreen
        };
        return this.render();
    }
}