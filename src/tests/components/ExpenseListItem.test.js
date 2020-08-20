import React from 'react'
import {shallow} from 'enzyme'
//import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expeneses'
import {ExpenseListItem} from '../../components/ExpenseListItem';

test('should render ExpenseListItem with expense',()=>{
    const wrapper=shallow(<ExpenseListItem {...expenses[2]}/>)
    expect(wrapper).toMatchSnapshot()
})
// test('should render ExpenseListItem with empty expense',()=>{
//     const wrapper=shallow(<ExpenseListItem expense={[]}/>)
//     expect(wrapper).toMatchSnapshot()
// })