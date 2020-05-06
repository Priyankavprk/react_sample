import { createStore, combineReducers } from 'redux'
import usersReducer from '../Reducers/users'
import userReducer from '../Reducers/users'

const rootReducer = combineReducers({
    users: userReducer
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store