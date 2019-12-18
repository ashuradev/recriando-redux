import { createStore } from '@fluxly';

import reducers from './reducers';

import listeners from './listeners';

const store = createStore(reducers);

store.subscribe(listeners);

export default store;
