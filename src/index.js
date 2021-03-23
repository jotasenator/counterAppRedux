import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { store } from "./store/store";

import CounterAppRedux from './CounterAppRedux';


ReactDOM.render(
  <Provider store={store} >
    <CounterAppRedux />
  </Provider>,
  document.getElementById('root')
);
