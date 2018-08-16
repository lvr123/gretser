import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
//import $ from 'jquery'; 

// eslint-disable-next-line
import tachyons from 'tachyons';

ReactDOM.render(<App className="tc"/>, document.getElementById('root'));
registerServiceWorker();
