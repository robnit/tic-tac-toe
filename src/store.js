import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// import your particular reducers...
import gameReducer from './game/reducer';
// combine step is the same...
const rootReducer = combineReducers({
  gameReducer
});

// this enables REDUX devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create store
const store = createStore(
  rootReducer,
  
  // this is the new piece here!!!
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;