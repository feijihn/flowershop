/*Entry point loads ./views/Main.js to 'component' inside index.html*/

import ReactDOM from 'react-dom';
import React from 'react';
import AdminMain from './views/AdminMain.jsx';

ReactDOM.render(<AdminMain />,document.getElementById('content'));
