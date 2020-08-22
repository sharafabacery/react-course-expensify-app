import React from 'react';
import ReactDOM from 'react-dom';
import {  Provider} from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {startSetExpenses}from './actions/expenses'

import 'react-dates/initialize';
import './index.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store=configureStore()


const jsx=(<Provider store={store}><AppRouter/></Provider>)
//ReactDOM.render(jsx,document.getElementById('root'))
ReactDOM.render(<p>Loading...</p>,document.getElementById('root'))

store.dispatch(startSetExpenses()).then(()=>{
    ReactDOM.render(jsx,document.getElementById('root'))


})

