import BaseNavigation from "../../../navigation/BaseNavigation";
import ProfileScreen from "../screen";
export class ProfileNavigations extends BaseNavigation {
    constructor(){
        super();
        this.screens = {
            Profile: ProfileScreen,
        };
        return this.render();
    }
}