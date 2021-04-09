import { MainRouting } from './main-routing';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import store from './redux/store';
import React from 'react';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className='app'>
        <MainRouting/>
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
