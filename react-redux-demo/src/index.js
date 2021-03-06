import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const reducer = (state, action) => {
  if(state === undefined) {
    return {n: 10}
  } else {
    if(action.type === 'add') {
      let newState = {n: state.n + action.payload}
      return newState
    } else {
      return state
    }
  }
}
const store = createStore(reducer)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
