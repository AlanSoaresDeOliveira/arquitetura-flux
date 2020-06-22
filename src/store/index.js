import { createStore } from 'redux';

import root from './modules/rootReducer';

const store = createStore(root);

export default store;
