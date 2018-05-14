import { combineReducers } from 'redux'
import sidebarReducer from '../sidebar/sidebarReducer'
import detailsReducer from '../details/detailsReducer'

const rootReducer = combineReducers({
    repos: sidebarReducer,
    details: detailsReducer
})

export default rootReducer