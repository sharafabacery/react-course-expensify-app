import React from 'react';
import ReactDOM from 'react-dom';
import {  Provider} from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import 'react-dates/initialize';
import './index.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store=configureStore()


const jsx=(<Provider store={store}><AppRouter/></Provider>)
ReactDOM.render(jsx,document.getElementById('root'))



