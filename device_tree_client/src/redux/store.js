import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { FETCH_ROOT, FETCH_ROOT_ERROR, IS_ROOT_LOADING } from "./types";

const initialState = {
  root: {},
  typeRoot: {},
  loading: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROOT:
      return {
        ...state,
        loading: false,
        root: action.payload.root,
        typeRoot: action.payload.typeRoot,
      };
    case FETCH_ROOT_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case IS_ROOT_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
    // eslint-disable-next-line no-unreachable
  }
};

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
