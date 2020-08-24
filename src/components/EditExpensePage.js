import React from 'react'
import {connect}from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {startEditExpense,startremoveExpense }from '../actions/expenses'

export const EditPage=(props)=>{
   const onSubmit=(expense)=>{
    props.startEditExpense(props.expense.id,expense)
    props.history.push('/')
    }

   const onRemove=()=>{
    props.startremoveExpense({id:props.expense.id})
    props.history.push('/')
   }
   return(
        <div>
        <div className="page-header">
        <div className="content-container">
        <h1 className='page-header__title'>Edit Expense</h1>
        </div>
        </div>

        <div className="content-container">
        <ExpenseForm
        expense={props.expense}
        onSubmit={onSubmit}
        /> 
        
        <button className=" button button--secondry" onClick={onRemove}>Remove </button>
        
        
     </div>
     
       
        </div>)


}

const mapStatetoProps=(state,props)=>{
     return{
         expense:state.expenses.find((expense)=>
                expense.id === props.match.params.id
         )
     }
}

const mapDispatchToProps=(dispatch)=>({
    startEditExpense:(id,expense)=>dispatch(startEditExpense(id,expense)),
    startremoveExpense:(data)=>dispatch(startremoveExpense(data))
})
export default connect(mapStatetoProps,mapDispatchToProps)( EditPage)