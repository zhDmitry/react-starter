// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from './App';
import createStore from './store/createStore';
import './index.css';

const initialState = window.__INITIAL_STATE__;
const store = createStore(initialState);
const MOUNT_NODE = document.getElementById('root')


let render = () => {
  ReactDOM.render(
    <AppContainer store={store} />,
    MOUNT_NODE
  )
}


if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    const renderApp = render
    render = () => {
      try {
        renderApp()
      } catch (error) {
        console.error(error)
      }
    }
  }
}

render()