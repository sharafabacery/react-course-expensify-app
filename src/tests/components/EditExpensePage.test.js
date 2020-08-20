import React from 'react'
import{shallow} from 'enzyme'
import moment from 'moment'
import {EditPage} from '../../components/EditExpensePage'
import expenses from '../fixtures/expeneses'

let editExpense,history,Wrapper,removeExpense;
beforeEach(()=>{
     editExpense=jest.fn()
     removeExpense=jest.fn()
     history={push:jest.fn()}
     Wrapper=shallow(<EditPage editExpense={editExpense} history={history} expense={expenses[0]} removeExpense={removeExpense}/>)
})

test('should render Edit Expense Page correctly',()=>{
    expect(Wrapper).toMatchSnapshot()
})

test('should handle editExpense',()=>{
    Wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id,expenses[0])

})
test('should handle remove Expense',()=>{
   Wrapper.find('button').simulate('click')
   expect(history.push).toHaveBeenLastCalledWith('/')
   expect(removeExpense).toHaveBeenLastCalledWith({id:expenses[0].id})


})