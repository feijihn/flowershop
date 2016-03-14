/*Entry point loads ./views/Main.js to 'component' inside index.html*/

import ReactDOM from 'react-dom';
import React from 'react';
import Main from './views/Main.jsx';

ReactDOM.render(<Main />,document.getElementById('content'));
