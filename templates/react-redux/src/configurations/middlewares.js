import {routerMiddleware} from 'react-router-redux'
import history from './history'
import app from '../components/app/middleware'
import home from '../components/home/middleware'

const router = routerMiddleware(history);

export default [
    app,
    router,
    home
]