export const Types = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
};

export const increment = () => ({
  type: Types.INCREMENT
});

export const decrement = () => ({
  type: Types.DECREMENT
});
