export default (creators, dispatch) =>
  Object.fromEntries(
    Object.entries(creators).map(([key, creator]) => [
      key,
      () => dispatch(creator(arguments))
    ])
  );
