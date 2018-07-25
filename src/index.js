import React from 'react';
import ReactDOM from 'react-dom';
import './resets.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/Login';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
