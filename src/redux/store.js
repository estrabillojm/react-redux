import { applyMiddleware, combineReducers, compose, createStore } from "redux"
// apply Middleware
import thunk from 'redux-thunk'
import logger from 'redux-logger'
// logger - displaying logs (development purposes ONLY remove in production) 
// thunk - helping the redux to update the state. helps to delay the synchronous state.

import users from './reducers/users'

const middlewares = compose(applyMiddleware(thunk, logger))
// compose - put all the middleware (thunk, logger)


const reducers = combineReducers({
    users
})

export default createStore(reducers, middlewares)
// createStore - the first argument will always be the reducers and the second argument will be the middlewares 