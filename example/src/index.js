import { bindActionCreators } from '@fluxly';

import { increment, decrement } from './actions/counter';

import store from './store';

const boundActionCreators = bindActionCreators(
  { increment, decrement },
  store.dispatch
);

document.getElementById('increment').onclick = boundActionCreators.increment;
document.getElementById('decrement').onclick = boundActionCreators.decrement;
