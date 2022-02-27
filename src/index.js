import React from 'react';
import ReactDom from 'react-dom';
import App from './routers/index.js'

ReactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
  );