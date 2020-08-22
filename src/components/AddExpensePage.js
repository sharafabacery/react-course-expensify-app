import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {startAddExpense} from '../actions/expenses'

const AddExpensePage=(props)=>{
  const  onSubmit=(expense)=>{
        props.startAddExpense(expense)
        props.history.push('/')
     }
    
         return(<div>
     <h1>
     Add Expense
     </h1>
     <ExpenseForm 
      onSubmit={onSubmit}
     />
    
    </div>)

}
// export class AddExpensePage extends React.Component{
//     onSubmit=(expense)=>{
//         this.props.addExpense(expense)
//         this.props.history.push('/')
//      }
//      render(){
//          return(<div>
//      <h1>
//      Add Expense
//      </h1>
//      <ExpenseForm 
//       onSubmit={this.onSubmit}
//      />
    
//     </div>)
//      }

// }

const mapDispatchToProps=(dispatch)=>(
      {
        startAddExpense:(expense)=>dispatch(startAddExpense(expense))
      }
)
export default connect(undefined,mapDispatchToProps)(AddExpensePage) 