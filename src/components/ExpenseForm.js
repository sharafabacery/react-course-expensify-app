import React,{useState} from "react";
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'


const ExpenseForm=(props)=>{
    const[description,setDescription]=useState(props.expense?props.expense.description:'')
    const[note,setNote]=useState(props.expense?props.expense.note:'')
    const[amount,setAmount]=useState(props.expense?props.expense.amount.toString():'')
    const[createdAt,setCreatedAt]=useState(props.expense?moment( props.expense.createdAt):moment())
    const[calendarFocused,setCalendarFocused]=useState(false)
    const [error,setError]=useState('')
    const onDescriptionChange=(e)=>{
        const description=e.target.value
        setDescription(description)
        }
    const onNoteChange=(e)=>{
        const note=e.target.value
        setNote(note)
        }

    const onAmountChange=(e)=>{
        const amount=e.target.value
        if (!amount||amount.match(/^\d{0,}(\.\d{0,2})?$/)) {
                setAmount(amount)
            }
        }
    const  onDateChange=(createdAt)=>{
        if(createdAt)
        setCreatedAt(createdAt)
        }
    const  onFocusChange=({focused})=>{
                setCalendarFocused(focused)
        }
    const   onSubmit=(e)=>{
                e.preventDefault()
                if (!description || !amount) {
                    setError('Please provide description and amount')
                   
                }else{
                    setError('')
                    props.onSubmit({
                        description:description,
                        amount:parseFloat(amount,10),
                        createdAt: createdAt.valueOf(),
                        note:note
                    })
                }
        
            }

            return(
                <div>
                <p>{error!=='' &&error}</p>
                <form onSubmit={onSubmit}>
                <input type="text" placeholder='Description' autoFocus value={description} onChange={onDescriptionChange} />
                <input type="number" placeholder='Amount' value={amount} onChange={onAmountChange}/>
                    <SingleDatePicker
                        date={createdAt}
                        onDateChange={onDateChange}
                        focused={calendarFocused}
                        onFocusChange={onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={()=>false}
                       
                    />
                <textarea placeholder="Add Note for Expense (optional)" value={note} onChange={onNoteChange}></textarea>
                
                <button type="submit">Add Expense</button>
                </form>
                </div>
                )


}


export default ExpenseForm