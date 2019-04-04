import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

/* contoh menggunakan flux redux bukan redux form */
/* bila mau diganti, ubah store dari todoapp */
// import todoApp from './components/redux/reducers.js';
// let store = createStore(todoApp);

import { BrowserRouter } from 'react-router-dom';

/* import untuk redux-form */
import { reducer as reduxFormReducer } from 'redux-form'
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux'

/* pasang reducer */
const reducer = combineReducers({
    form: reduxFormReducer // mounted under "form"
})
/* set store */
const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducer)

ReactDOM.render(

    <BrowserRouter>
        {
            // pasang provider store, agar bisa diakses di semua komponen
            // jika ingin langsung bisa juga import dari store
        }
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
