const counter = document.getElementById('counter');

export default store => {
  console.log('Novo estado: ' + store.getState().counter);
};
