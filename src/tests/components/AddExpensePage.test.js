import React from 'react'
import{shallow} from 'enzyme'
import moment from 'moment'
import {AddExpensePage} from '../../components/AddExpensePage'
import expenses from '../fixtures/expeneses'
let startAddExpense,history,Wrapper;
beforeEach(()=>{
    startAddExpense=jest.fn()
     history={push:jest.fn()}
     Wrapper=shallow(<AddExpensePage startAddExpense={startAddExpense} history={history}/>)
})

test('should render AddExpensePage correctly',()=>{
    expect(Wrapper).toMatchSnapshot()
})

test('should handle onSubmit',()=>{

    Wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
     expect(history.push).toHaveBeenLastCalledWith('/')
     expect(startAddExpense).toHaveBeenLastCalledWith(expenses[0])


})