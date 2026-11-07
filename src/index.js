import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// GitHub Pages serves this app as 404.html for any unknown path, and
// HashRouter only reads the part after "#". Move the path into the hash so
// /printing opens the Printing page and anything else shows NotFound.
const { pathname, hash } = window.location;
if (pathname !== '/' && pathname !== '/index.html' && !hash) {
    window.history.replaceState(null, '', '/#' + pathname.replace(/\/+$/, ''));
}

ReactDOM.render(<App />, document.getElementById('root')
);

