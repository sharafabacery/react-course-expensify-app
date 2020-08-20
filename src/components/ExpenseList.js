import React from "react";
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from "../selectors/expenses";
export const ExpenseList=(props)=>(
   
<div>
<h1>Expense List</h1>
{
   props.expenses.length ===0?(<p>No Expenses</p>):(props.expenses.map((expense,index)=>(<ExpenseListItem key={expense.id} expense={expense}/>)))
}

</div>
)

// const ConnectedExpenseList=connect((state)=>{
//     return{
//         expenses:state.expenses
//     }
// })(ExpenseList)
//map store state to compoent state
const mapStateToProps=(state)=>{
         return{
            expenses:selectExpenses(state.expenses,state.filter)
         }
     }
export default connect(mapStateToProps)(ExpenseList)