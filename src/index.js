import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createGunventoryStore } from './State/store';

const store = createGunventoryStore();

ReactDOM.render(<Provider store={store}><MuiThemeProvider><App /></MuiThemeProvider></Provider>, document.getElementById('root'));
registerServiceWorker();
