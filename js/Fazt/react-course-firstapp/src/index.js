import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// Si desea que su aplicación funcione sin conexión y se cargue más rápido, puede cambiar
// anular el registro () para registrar () a continuación. Tenga en cuenta que esto viene con algunos escollos.
// Obtenga más información sobre los trabajadores de servicios: http://bit.ly/CRA-PWA
registerServiceWorker();
