import BaseNavigation from "../../../navigation/BaseNavigation";
import HomeScreen from "../screen";
export class HomeNavigations extends BaseNavigation {
    constructor(){
        super();
        this.screens = {
            Home: {
                screen: HomeScreen,
                options: {
                    headerShown:false
                }
            } 
        };
        
        return this.render();
    }
}