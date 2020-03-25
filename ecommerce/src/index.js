import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router }  from 'react-router-dom';
import App from './view/App';
import { Provider } from 'react-redux'
import configureStore from './store';


import './index.css';
import * as serviceWorker from './serviceWorker';



render(
    <Provider store={configureStore()}>
     <Router>
         <App />
     </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
