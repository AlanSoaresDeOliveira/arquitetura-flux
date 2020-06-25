import { createStore, applyMiddleware, compose } from 'redux';
import creatSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = creatSagaMiddleware();

const enhacer = process.env.NODE_ENV === 'development' 
  ? compose(
      console.tron.createEnhancer(),
      applyMiddleware(sagaMiddleware)
    )
  : applyMiddleware(sagaMiddleware);


const store = createStore(rootReducer, enhacer);

sagaMiddleware.run(rootSaga);

export default store;
