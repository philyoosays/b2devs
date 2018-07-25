import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App';

import './index.css';

require('dotenv').config();

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
registerServiceWorker();
