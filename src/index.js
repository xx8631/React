import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
//利用react-redux的provider提供全局store
import store from './store'
import { Provider } from './pages/reactFrame/MyReactRedux';
console.log("store",store);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);                        