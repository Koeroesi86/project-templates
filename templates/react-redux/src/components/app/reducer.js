import {routes} from '../../configurations/routes'
import {APP_NAME} from "../../configurations/constants";

export const initialState = {
    name: APP_NAME,
    routes
};

export default (state = initialState, action) => {
    return state;
}