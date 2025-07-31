import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

// 1. Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// 2. Add other middlewares if needed
const middlewares = [sagaMiddleware];

// 3. Enable Redux DevTools Extension if available
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 4. Create the Redux store
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

// 5. Run the root saga
sagaMiddleware.run(rootSaga);

export default store;
