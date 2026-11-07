import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const { pathname, hash } = window.location;
if (pathname !== '/' && pathname !== '/index.html' && !hash) {
    window.history.replaceState(null, '', '/#' + pathname.replace(/\/+$/, ''));
}

ReactDOM.render(<App />, document.getElementById('root')
);

