import {INIT_APP} from "../app/actions";

export default store => next => action => {
    if (action.type === INIT_APP) {
        // do something on app init
    }

    next(action);
}