import React from 'react'
import {shallow} from 'enzyme'
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expeneses'
import {ExpenseListItem} from '../../components/ExpenseListItem';
test('should render ExpenseList with Expenses',()=>{
    const wrapper=shallow(<ExpenseList expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseList with empty Expenses',()=>{
    const wrapper=shallow(<ExpenseList expenses={[]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListItem with expense',()=>{
    const wrapper=shallow(<ExpenseListItem expense={expenses[2]}/>)
    expect(wrapper).toMatchSnapshot()
})