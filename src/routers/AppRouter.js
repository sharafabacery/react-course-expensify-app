import React from 'react'
import {BrowserRouter as Router,Route,Switch}from 'react-router-dom'
import EditExpensePage from '../components/EditExpensePage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'


const AppRouter=() =>(<Router>
    <div>
    <Header/>
    <Switch>
    <Route exact path='/' component={ExpenseDashboardPage}/>
    <Route exact path='/create' component={AddExpensePage}/>
    <Route exact path='/edit/:id' component={EditExpensePage}/>
    <Route exact path='/help' component={HelpPage}/>
    <Route component={NotFoundPage}/>
    </Switch>
    </div>
    </Router>
    )
export default AppRouter