import {createStore,combineReducers} from 'redux'
import {v4} from 'uuid'
//ADD_EXPENSE 
const addExpense=(
{
description=''
,note=''
,amount=''
,createAt=0 
}={})=>({
    
    type:'ADD_EXPENSE',
    expense:{
        id:v4(),
        description,
        note,
        amount,
        createAt
    }
})
//REMOVE_EXPENSE
const removeExpense=({
id
})=>({
  type:'REMOVE_EXPENSE'
  ,id 
})

//EDIT_EXPENSE

const editExpense=(id,updates)=>({
    type:'EDIT_EXPENSE',
    id,
    updates
})

const setTextFilter=(text='')=>({
   type:'SET_TEXT_FILTER'
   ,text
})
//SORT_BY_DATE
const sortByDate=()=>({
    type:'SORT_BY_DATE'
    ,sortBy:'date'
}
)
//SORT_BY_AMOUNT
const sortByAmount=()=>({
    type:'SORT_BY_AMOUNT'
    ,sortBy:'amount'
}
)
//SET_START_DATE
const setStartDate=(startDate=undefined)=>({
    type:'SET_START_DATE'
    ,startDate:startDate
})
//SET_END_DATE
const setEndDate=(endDate=undefined)=>({
    type:'SET_END_DATE'
    ,endDate:endDate
})
//Expenses Reducer

const expensesReducerDefaultState=[]
const expensesReducer=(state=expensesReducerDefaultState,action)=>{
      switch (action.type) {
          case 'ADD_EXPENSE':
           return [
               ...state,
            action.expense
        ]
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=>id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id===action.id){
                  return{
                      ...expense,
                      ...action.updates
                  }
                }else return expense
            })
          default:
            return state
              
      } 
}

const filterReducersDefaultState={
    text:'',
    sortBy:'10-4-2020',
    startDate:undefined,
    endDate:undefined
}
const filterReducer=(state=filterReducersDefaultState,action)=>{
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            const {text}=action
            return{...state,text}
        case 'SORT_BY_DATE':
            return {...state,sortBy:action.sortBy}
        case 'SORT_BY_AMOUNT':
                return {...state,sortBy:action.sortBy}
        case 'SET_START_DATE':
             return {...state,startDate:action.startDate}
             case 'SET_END_DATE':
                return {...state,endDate:action.endDate}
        default:
          return state
            
    }

}


const getVisibleExpenses=(expenses,{text,sortBy,startDate,endDate})=>{
    //const=filters
  return expenses.filter((expense)=>{
      //true in time of fillter
      const startDateMatch=typeof startDate !=='number' ||expense.createAt>=startDate ;
      const endDateMatch=typeof endDate !=='number' ||expense.createAt<=endDate ;
      
      const textMatch=expense.description.toLowerCase().includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch
  }).sort((a,b)=>{
    if(sortBy==='date'){
        return a.createAt < b.createAt ? 1 : -1
    }
    else if(sortBy=='amount'){
        return a.amount < b.amount? 1: -1
    }

  })
}


//store creation

const store=createStore(combineReducers({
    expenses:expensesReducer
    ,filter:filterReducer
}))
store.subscribe(()=>{
    const state=store.getState()
    const VisibleExpenses=getVisibleExpenses(state.expenses,state.filter);
    console.log(VisibleExpenses)

    //console.log(store.getState())
    })
const two=store.dispatch(addExpense({description:'abaa',amount:90,createAt:145}))
const one=store.dispatch(addExpense({description:'bbdda',amount:100,createAt:-100}))

store.dispatch(setStartDate(-1000))
// store.dispatch(removeExpense({id:one.expense.id}))
// store.dispatch(editExpense(two.expense.id,{amount:500}))
 store.dispatch(setTextFilter('a'))

store.dispatch(setEndDate(200))
store.dispatch(sortByAmount())
const demoState={
    expenses:[
        {
            id:'adasdf',
            description:'Rent',
            note:'this was the final payment for that address ',
            amount: 54500,
            createAt:0
        }
    ],
    filters:{
        text:'rent',
        sortBy:'amount',//date
        startDate:undefined,
        endDate:undefined
    }
}

// const user={
//     name:'sharaf',
//     age:20
// }

// console.log({...user,location:'lex'})