import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk from "redux-thunk";
import {authReducer} from "./reducers/authReducer";
import {usersReducer} from "./reducers/usersReducer";
import {profileReducer} from "./reducers/profileReducer";

const reducers = combineReducers({
  authReducer,
  usersReducer,
  profileReducer
})

export const store = legacy_createStore(reducers, applyMiddleware(thunk))