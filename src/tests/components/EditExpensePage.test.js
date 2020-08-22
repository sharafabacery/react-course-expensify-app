import React from 'react'
import{shallow} from 'enzyme'
import moment from 'moment'
import {EditPage} from '../../components/EditExpensePage'
import expenses from '../fixtures/expeneses'

let startEditExpense,history,Wrapper,startRemoveExpense;
beforeEach(()=>{
    startEditExpense=jest.fn()
     startRemoveExpense=jest.fn()
     history={push:jest.fn()}
     Wrapper=shallow(<EditPage startEditExpense={startEditExpense} history={history} expense={expenses[0]} startRemoveExpense={startRemoveExpense}/>)
})

test('should render Edit Expense Page correctly',()=>{
    expect(Wrapper).toMatchSnapshot()
})

test('should handle editExpense',()=>{
    Wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id,expenses[0])

})
test('should handle remove Expense',()=>{
   Wrapper.find('button').simulate('click')
   expect(history.push).toHaveBeenLastCalledWith('/')
   expect(startRemoveExpense).toHaveBeenLastCalledWith({id:expenses[0].id})


})