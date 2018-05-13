import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";
import axios from "axios";
import { AsyncStorage } from "react-native";
import { createLogger } from "redux-logger";

const LoggerMiddleware = createLogger();

const checkToken = store => next => action => {
	if (store.getState().auth.token) {
		axios.defaults.headers.common["authorization"] = store.getState().auth.token;
	} else {
		AsyncStorage.getItem("token").then(value => {
			axios.defaults.headers.common["authorization"] = value;
		});
	}
	return next(action);
};

export const store = createStore(reducers, {}, applyMiddleware(thunk, checkToken, LoggerMiddleware));
