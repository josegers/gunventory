import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createGunventoryStore } from './State/store';
import Test from './Components/Test/Test';
import MaterialTest from './Components/Test/MaterialTest';


const store = createGunventoryStore();

ReactDOM.render(<Provider store={store}><MuiThemeProvider><Test/><MaterialTest /></MuiThemeProvider></Provider>, document.getElementById('root'));
registerServiceWorker();
