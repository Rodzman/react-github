import { combineReducers } from 'redux'
import sidebarReducer from '../sidebar/sidebarReducer'

const rootReducer = combineReducers({
    repos: sidebarReducer
})

export default rootReducer