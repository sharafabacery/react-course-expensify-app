
import database from '../firebase/firebase'
//ADD_EXPENSE 
export const addExpense=(expense)=>({
    
    type:'ADD_EXPENSE',
    expense
})
export const startAddExpense=(expenseDate={})=>{
    return (dispatch)=>{
        const {description='',note='',amount=0,createdAt=0 }=expenseDate
        const expense={description,note,amount,createdAt}
        return database.ref('expenses').push(expense).then((ref)=>{
            dispatch(addExpense({
                id:ref.key,
                ...expense
            }))
        })
    }
}


//REMOVE_EXPENSE
export const removeExpense=({
id
})=>({
  type:'REMOVE_EXPENSE'
  ,id 
})

//EDIT_EXPENSE

export const editExpense=(id,updates)=>({
    type:'EDIT_EXPENSE',
    id,
    updates
})

export const setExpenses=(expenses)=>({
   type:'SET_EXPENSES',
    expenses
});

export const startSetExpenses=()=>{
   return(dispatch)=>{
     return database.ref('expenses')
        .once('value')
        .then((snapshot)=>{
            const expensesArray=[]
            snapshot.forEach((childsnapshot)=>{
                expensesArray.push({
                    id:childsnapshot.key,
                    ...childsnapshot.val()
                })
            })
           dispatch(setExpenses(expensesArray))
        }
        )




   }

};
export const startEditExpense=(id,updates)=>{
    return(dispatch)=>{
        return database.ref(`expenses/${id}`).update(updates)
        .then((snapshot)=>{
           dispatch(editExpense(id,updates))
        })
    }
}
export const startremoveExpense=({id})=>{
   return(dispatch)=>{
      return database.ref(`expenses/${id}`).remove()
      .then(()=>{

        dispatch(removeExpense({id}))
      })
     


   }
  



}