import {applyMiddleware} from "redux"
import { legacy_createStore as createStore} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {userReducer} from "../reducers/userReducer";

export const store = createStore(userReducer, composeWithDevTools(applyMiddleware(thunk)));