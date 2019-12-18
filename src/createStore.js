export default reducer => {
  let state = {};
  let listeners = [];

  dispatch({ type: '@redux:/state.create' });

  function dispatch(action) {
    state = reducer(state, action);

    listeners.forEach(l => l(this));
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

  return {
    dispatch,
    getState,
    subscribe,
    replaceReducer
  };
};
