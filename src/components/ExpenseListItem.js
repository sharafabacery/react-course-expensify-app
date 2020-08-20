import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'
export const ExpenseListItem=(props)=>(
    <div>
       <Link to={'/edit/'+props.expense.id} ><p>{props.expense.description}</p></Link>
    <p>
    {numeral(props.expense.amount).format('$0,0.00')}
     - 
     {moment(props.expense.createdAt).format('MMMM Do, YYYY')}
     </p>
    
    </div>
)

export default  ExpenseListItem