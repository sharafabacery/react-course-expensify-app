import React from 'react';
import ReactDOM from 'react-dom';
import {  Provider} from 'react-redux';
import AppRouter,{history} from './routers/AppRouter'
import configureStore from './store/configureStore'
import {startSetExpenses}from './actions/expenses'
import { login,logout } from "./actions/auth";
import { firebase } from "./firebase/firebase";
import LoadingPage from "./components/LoadingPage"
import './styles/styles.scss';
import 'react-dates/initialize';

import 'react-dates/lib/css/_datepicker.css';

const store=configureStore()


const jsx=(<Provider store={store}><AppRouter/></Provider>)
//ReactDOM.render(jsx,document.getElementById('root'))
ReactDOM.render(<LoadingPage/>,document.getElementById('root'))

let hasRendered=false
const renderApp=()=>{
    if (!hasRendered) {
        
        ReactDOM.render(jsx,document.getElementById('root'))
        hasRendered=true
        
    }
}

firebase.auth().onAuthStateChanged((user)=>{
    if(user){  
        store.dispatch(login({uid:user.uid}))
        store.dispatch(startSetExpenses()).then(()=>{
          renderApp()
        })
        if (history.location.pathname ==='/') {
            history.push('/dashboard')
        }

    }else{
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
   // console.log(store.getState())
})


