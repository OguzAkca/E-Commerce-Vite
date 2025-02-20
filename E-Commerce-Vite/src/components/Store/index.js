import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux"
import { thunk } from "redux-thunk";
import logger from "redux-logger"
import clientReducer from "./clientReducer"
import productReducer from "./productReducer"
import shoppingCartReducer from "./shoppingCartReducer"

const rootReducer = combineReducers({
    client: clientReducer,
    product: productReducer,
    shoppingCart: shoppingCartReducer,
  });
  
  const store = createStore(rootReducer, applyMiddleware(thunk, logger));
  
  export default store;