import moment from 'moment'
import { setEndDate,setStartDate,sortByAmount,sortByDate,setTextFilter } from "../../actions/filters";

test('should genrate set start date action object',()=>{
    const action=setStartDate()
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate:undefined
    })
})

test('should genrate set end date action object',()=>{
    const action=setEndDate(moment(0))
    expect(action).toEqual({
        type:'SET_END_DATE'
        ,endDate:moment(0)
    })
})

test('should genrate sort by amount action object',()=>{
    const action=sortByAmount()
    expect(action).toEqual({
    type:'SORT_BY_AMOUNT'
    ,sortBy:'amount'})

})

test('should genrate sort by date action object',()=>{
    const action=sortByDate()
    expect(action).toEqual({
    type:'SORT_BY_DATE'
    ,sortBy:'date'})

})

test('should genrate set text filter action object',()=>{
    const action=setTextFilter('Rent')
    expect(action).toEqual({
        type:'SET_TEXT_FILTER'
        ,text:'Rent'
    })
})

test('should genrate set text filter with empty  action object',()=>{
    const action=setTextFilter()
    expect(action).toEqual({
        type:'SET_TEXT_FILTER'
        ,text:''
    })
})