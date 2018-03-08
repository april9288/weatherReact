import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWeather from './AppWeather';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(<AppWeather />, document.getElementById('root'));
registerServiceWorker();
