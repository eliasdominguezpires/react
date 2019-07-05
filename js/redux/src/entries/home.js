import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
// import Playlist from './src/playlist/components/playlist';
// import data from '../api.json';
// console.log('Hola mundo!' )
// import data from '../schemas/index.js';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/index';
import { Map as map } from 'immutable'; 
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// console.log(data);
// console.log(data);

// const initialState = {
//   data: {
//     // ...data,
//     entities: data.entities,
//     categories: data.result.categories,
//     search: [],
//   },
//   modal: {
//     visibility: false,
//     mediaId: null,
//   }
// }

/* ----- versión pre-ES6
function logger({ getState, dispatch }) {
    return (next) => {
        return (action) => {
            console.log('este es mi viejo estado', getState().toJS())
            console.log('vamos a enviar está acción', action);
            const value = next(action)
            console.log('este es mi nuevo estado', getState().toJS())
            return value
        }
    }
}*/
/* --- versión ES6 */
const logger_ = ({ getState, dispatch }) => next => action => {
    console.log('este es mi viejo estado', getState().toJS())
    console.log('vamos a enviar está acción', action);
    const value = next(action)
    console.log('este es mi nuevo estado', getState().toJS())
    return value;
}


const store = createStore(
    reducer,
    map(),
    composeWithDevTools(        
        applyMiddleware(
            logger,
            logger_,
            thunk
        ),
    )
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// console.log(store.getState());

const homeContainer = document.getElementById('home-container')

// ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>hola Estudiante!</h1>;

render(
    <Provider store={store}>
        <Home />
    </Provider>
    , homeContainer);