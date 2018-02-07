import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createGunventoryStore } from './State/store';
import Test from './Components/Test/Test';


const store = createGunventoryStore();

ReactDOM.render(<Provider store={store}><Test/></Provider>, document.getElementById('root'));
registerServiceWorker();
