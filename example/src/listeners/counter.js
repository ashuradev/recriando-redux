import store from '../store';

const counterView = document.getElementById('counter');

export default () =>
  (counterView.innerText = `Contador: ${store.getState().counter}`);
