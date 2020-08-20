import React from 'react'
import{shallow} from 'enzyme'
import moment from 'moment'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expeneses'

test('should render ExpenseForm correctly',()=>{
    const wrapper =shallow(<ExpenseForm/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render expense form with data correctlt',()=>{
    const wrapper=shallow(<ExpenseForm expense={expenses[1]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid from submission',()=>{
    const Wrapper=shallow(<ExpenseForm/>)
    Wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    })
    expect(Wrapper.state("error").length).toBeGreaterThan(0)
    expect(Wrapper).toMatchSnapshot()
})

test('should set description an input change',()=>{
    const value='new description'
    const Wrapper=shallow(<ExpenseForm/>)
    Wrapper.find('input').at(0).simulate('change',{
        target:{value}
    })
    expect(Wrapper.state('description')).toBe(value)
})

test('should set note an input change',()=>{
    const value='new note'
    const Wrapper=shallow(<ExpenseForm/>)
    Wrapper.find('textarea').simulate('change',{
        target:{value}
    })
    expect(Wrapper.state('note')).toBe('new note')
})
test('should set amount at valid data',()=>{
    const value="123"
    const Wrapper=shallow(<ExpenseForm/>)
    Wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(Wrapper.state('amount')).toBe(value)
})
test('should set amount at invalid data',()=>{
    const value="1"
    const Wrapper=shallow(<ExpenseForm/>)
    Wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(Wrapper.state('amount')).toBe('1')
})
test('should call onSubmit prop for valid from sum',()=>{
    const onSubmitSpy=jest.fn()
    const Wrapper=shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
    Wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    })
    expect(Wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        
        description:'Gum',
        note:'',
        amount:195,
        createdAt:0
    })
})
//get 3 party props
test('should set new date on date change',()=>{
    const now=moment()
    const Wrapper=shallow(<ExpenseForm />)
    Wrapper.find('SingleDatePicker').prop('onDateChange')(now)
    expect(Wrapper.state('createdAt')).toEqual(now)
    
})
test('should set new focused on date change',()=>{
    const calendarFocused=undefined
    const Wrapper=shallow(<ExpenseForm />)
    Wrapper.find('SingleDatePicker').prop('onFocusChange')({calendarFocused})
    expect(Wrapper.state('calendarFocused')).toEqual(calendarFocused)
    
})