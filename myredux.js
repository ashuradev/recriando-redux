class Store {
  constructor(reducer) {
    this.reducer = reducer
    this.subscribers = []
  }

  dispatch(action) {
    this.prevState = this.state
    this.state = this.reducer(this.state, action)

    this.notifySubscribers()
  }

  notifySubscribers() {
    this.subscribers.forEach(subscriber => subscriber(this.state, this.prevState))
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber)
  }

  getState() {
    return this.state
  }
}

const Redux = {
  createStore: (reducer) => {
    const store = new Store(reducer)

    store.dispatch({ type: '@myredux:init' })

    return store
  }
}

window.Redux = Redux