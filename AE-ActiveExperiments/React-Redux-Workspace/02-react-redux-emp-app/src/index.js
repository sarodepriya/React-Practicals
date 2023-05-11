import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import store from './redux/store'
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root')); //this function mounts your react app to the "root" provided in the index.html file.
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>         
  </React.StrictMode> //strictmode??? : It is a tool which activates additional checks and warnings 
                                      //for its components and sub-components.
);

