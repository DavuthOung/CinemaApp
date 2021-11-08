import BaseNavigation from "../../../navigation/BaseNavigation";
import HomeScreen from "../screen";
// import DetailScreen from "../screen/Detail";
export class HomeNavigations extends BaseNavigation {
    constructor(){
        super();
        this.screens = {
            Home: HomeScreen,
        };
        
        return this.render();
    }
}