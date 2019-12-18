const counter = document.getElementById('counter')

const refresh = (state, prevState) => {
  state.counter !== prevState.counter
    && (counter.innerHTML = Counter({ counter: state.counter }))
}

const { createStore } = Redux 

const INCREMENT = 'INCREMENT'

const INITIAL_COUNTER_STATE = 0

const counterReducer = (state = INITIAL_COUNTER_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1

    default:
      return 0
  }
}

const rootReducer = (state = {}, action) => ({
  counter: counterReducer(state.counter, action),
})

const increment = () => ({
  type: INCREMENT,
})

const addMessage = message => ({
  type: ADD_MESSAGE,
  payload: message 
})

const store = createStore(rootReducer)

store.subscribe(refreshView)

store.dispatch(increment())