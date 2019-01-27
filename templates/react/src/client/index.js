import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from '../components/app/App';
import registerServiceWorker from './registerServiceWorker';

if (typeof document !== 'undefined' && typeof window !== 'undefined') {
  const rootEl = document.getElementById('root');
  ReactDOM.render(
    <App />,
    rootEl,
  );

  registerServiceWorker();
}
