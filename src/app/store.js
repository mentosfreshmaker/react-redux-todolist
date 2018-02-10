import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import todos from './reducers/todos'; 
import visibilityFilter from './reducers/visibilityFilter'; 

export default createStore(
    combineReducers({
        todos,
        visibilityFilter
    }),
    {},
    applyMiddleware(createLogger())
)