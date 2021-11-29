import BaseNavigation from "../../../navigation/BaseNavigation";
import SearchScreen from "../screen";
export class SearchNavigations extends BaseNavigation {
    constructor(){
        super();
        this.screens = {
            Search: SearchScreen,
        };
        return this.render();
    }
}