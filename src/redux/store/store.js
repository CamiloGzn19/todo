import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { notasReducer } from "../reducers/notasReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducer = combineReducers({ notas: notasReducer });

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
