import { FLUXLY_INIT } from './actionTypes';

export default reducer => {
  let state;
  let listeners = [];

  function dispatch(action) {
    state = reducer(state, action);

    listeners.forEach(l => l());
  }

  function getState() {
    return state;
  }

  function subscribe(listener) {
    listeners.push(listener);
  }

  function replaceReducer(nextReducer) {
    reducer = nextReducer;
  }

  dispatch({ type: FLUXLY_INIT });

  return {
    dispatch,
    getState,
    subscribe,
    replaceReducer,
    state
  };
};
