import {createStore, applyMiddleware, compose} from 'redux'
import reducers from './reducers'
import middlewares from '../configurations/middlewares'
import {initApp} from '../components/app/actions'

const enhancers = [];
const initialState = {};

if (process.env && process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middlewares),
    ...enhancers
);

const store = createStore(
    reducers,
    initialState,
    composedEnhancers
);

store.dispatch(initApp());

export default store