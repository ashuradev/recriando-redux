export default reducers => (state, action) =>
  Object.fromEntries(
    Object.entries(reducers).map(([key, reducer]) => [
      key,
      reducer(state, action)
    ])
  );
