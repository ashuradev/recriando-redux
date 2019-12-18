export default reducer => {
  let state = {};
  let listeners = [];

  return {
    dispatch: action => {
      state = reducer(state, action);

      listeners.forEach(l => l());
    },

    getState: () => state,

    subscribe: listener => listeners.push(listener),

    replaceReducer: nextReducer => (reducer = nextReducer)
  };
};
