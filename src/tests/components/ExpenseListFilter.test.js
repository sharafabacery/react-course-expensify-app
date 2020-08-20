import React from 'react'
import{shallow} from 'enzyme'
import moment from 'moment'
import{ExpenseListFilter}from '../../components/ExpenseListFilter'
import {filter,altfilter}from '../fixtures/filter'

let setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate,Wrapper


beforeEach(()=>{
    setTextFilter=jest.fn()
    sortByDate=jest.fn()
    sortByAmount=jest.fn()
    setStartDate=jest.fn()
    setEndDate=jest.fn()
    Wrapper=shallow(<ExpenseListFilter filters={filter} setTextFilter={setTextFilter} sortByDate={sortByDate} sortByAmount={sortByAmount} setEndDate={setEndDate} setStartDate={setStartDate}/>)

})

test('should render ExpenseListFilters correctly',()=>{
    expect(Wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with alt data correctly',()=>{
    //change props
    //setProps manipulatethe props for agiven component
    Wrapper.setProps({
        filters:altfilter
    })
   expect(Wrapper).toMatchSnapshot()
})

test('should handle text change',()=>{
    const value='bill'
     Wrapper.find('input').simulate('change',{
        target:{value}
     })
    expect(setTextFilter).toHaveBeenLastCalledWith('bill')


})
test('should sort by date',()=>{
    const value='date'
    Wrapper.setProps({
        filters:altfilter
    })
     Wrapper.find('select').simulate('change',{
        target:{value}
     })
   
    expect(sortByDate).toHaveBeenCalled()


})

test('should sort by Amount',()=>{
    const value='amount'
    Wrapper.setProps({
        filters:altfilter
    })
     Wrapper.find('select').simulate('change',{
        target:{value}
     })
   
    expect(sortByAmount).toHaveBeenCalled()


})

test('should handle date change',()=>{
    const startDate=moment(0).add(4,'years')
    const endDate=moment(0).add(8,'years')
    Wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})
test('should handle date focus change',()=>{
    const calendarFocused='endDate'
    Wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
    expect(Wrapper.state('calendarFocused')).toBe(calendarFocused)
})
