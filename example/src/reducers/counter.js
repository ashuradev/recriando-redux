import { Types, increment, decrement } from '../actions/counter';

const INITIAL_STATE = 0;

export default (counter = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.INCREMENT:
      return counter + 1;

    case Types.DECREMENT:
      return counter - 1;

    default:
      return counter;
  }
};
