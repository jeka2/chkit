import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

const middleWares = [logger, thunk];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default store;
