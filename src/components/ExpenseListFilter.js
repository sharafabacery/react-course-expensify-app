import React,{useState} from 'react'
import {connect} from 'react-redux'
import { DateRangePicker } from 'react-dates';
import {setTextFilter,sortByAmount,sortByDate,setEndDate,setStartDate  } from '../actions/filters';


export const ExpenseListFilter=(props)=>{
    const[calendarFocused,setCalendarFocused]=useState(null);

   const onDatesChange=({startDate,endDate})=>{
    props.setStartDate(startDate)
    props.setEndDate(endDate)
    }

   const onFocusChange=(calendarFocused)=>{
       setCalendarFocused(calendarFocused)

    }
   const onSortChange=(e)=>{
        if ( e.target.value==='date') {
            props.sortByDate()
        }else if(e.target.value ==='amount'){props.sortByAmount()}
       
        
            }
   const onTextChange=(e)=>{props.setTextFilter(e.target.value)}
   
            return(<div>
            <input type="text" value={props.filters.text} onChange={
               onTextChange
              
                
            }/>
            <select value={props.filters.sortBy} onChange={onSortChange}>
            <option value='date'>Date</option>
            <option value='amount'>Amount</option>
            </select>
            <DateRangePicker
            startDate={props.filters.startDate}
            endDate={props.filters.endDate}
            onDatesChange={onDatesChange}
            focusedInput={calendarFocused}
            onFocusChange={onFocusChange}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={()=>false}
            startDateId="start"
            endDateId="end"
            
            />
            </div>)


}

const mapStateToProps=(state)=>{
    return{
        filters:state.filter
    }
}
const mapDispatchToProps=(dispatch)=>({
    setTextFilter:(text)=>dispatch(setTextFilter(text)),
    sortByDate:()=>dispatch(sortByDate()),
    sortByAmount:()=>dispatch(sortByAmount()),
    setStartDate:(StartDate)=>dispatch(setStartDate(StartDate)),
    setEndDate:(endDate)=>dispatch(setEndDate(endDate))
})
export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilter)