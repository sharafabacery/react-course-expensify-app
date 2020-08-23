import {startAddExpense ,startremoveExpense,addExpense,removeExpense,editExpense,setExpenses,startSetExpenses,startEditExpense } from '../../actions/expenses';
import expenses from '../fixtures/expeneses'
import configureMockStore from "redux-mock-store";
import database from '../../firebase/firebase'
import thunk from 'redux-thunk'

const uid='this is my id'
const defaultUID={auth:{uid}}
const createMockStore=configureMockStore([thunk])

beforeEach((done)=>{
    const expensesData={}

    expenses.forEach(({id,description,createdAt,note})=>{
        expensesData[id]={id,description,createdAt,note}
    })

    database.ref(`users/${uid}/expenses`).set(expensesData).then(()=>{done()})
})



test('should setup  remove expense action object',()=>{
    const action=removeExpense({id:'abc123'})
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'abc123'
    })
})

test('should setup edit expense action object',()=>{
    const editAction=editExpense('123abc',{note:'new value assigned'})
    expect(editAction).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc',
        updates:{note:'new value assigned'}
    })
})

test('should setup add expense action object with provided values',()=>{
   
    const action=addExpense(expenses[1])
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:expenses[1]
    })


})

test('should add expense to database and store',(done)=>
{
    const store=createMockStore(defaultUID)
    const expenseData={
        description:'Rent'
        ,amount:150
        ,createdAt:1000
        ,note:''
    }
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions=store.getActions()
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                id:expect.any(String),
                ...expenseData
            }


        })
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(
            expenseData
        )
       }) 
      done()
   

})
test('should add expense with default to database and store',(done)=>
{
    const store=createMockStore({})
    const expenseData={
        description:''
        ,amount:0
        ,createdAt:0
        ,note:''
    }
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions=store.getActions()
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                id:expect.any(String),
                ...expenseData
            }


        })
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(
            expenseData
        )
       }) 
      done()


    
})

test('should setup set expense action object',()=>{
   const action=setExpenses(expenses)
   expect(action).toEqual({
       type:'SET_EXPENSES',
       expenses
   })


})
test('should fetch the expenses from firebase',(done)=>{
    const store=createMockStore(defaultUID)
     
    store.dispatch(startSetExpenses()).then(()=>{
        const action=store.getActions()
        
        expect(action[0]).toEqual({
            type:'SET_EXPENSES',
            expenses
        })

       

    })
    done()
})

test('should remove expenses from firebase',(done)=>{
    const store=createMockStore({defaultUID})
     const id=expenses[0].id
    store.dispatch(startremoveExpense({id})).then(()=>{
       const action=store.getActions()

       expect(action[0]).toEqual({
           type:'REMOVE_EXPENSE',
           id
       })
       return database.ref(`users/${uid}/expenses/${id}`).once('value')
        
    }).then((snapshot)=>{
      expect(snapshot.val()).toBeFalsy()
       done()
    })
   
})
test('shoud update expenses from firebase',(done)=>{
    const store=createMockStore(defaultUID)
    const id=expenses[0].id
    const updates={description:'ffffff'}
    store.dispatch(startEditExpense(id),updates).then(()=>{
        const action=store.getActions()

        expect(action[0]).toEqual({
            type:'EDIT_EXPENSE',
            id,updates
        })
        return database.ref(`users/${uid}/expenses/${id}`).once('value')
        
    }).then((snapshot)=>{
      expect(snapshot.val()).toBeFalsy()
       done()
    })

})
// test('should setup add expense action object with default values',()=>{
//     const action=addExpense()
//     expect(action).toEqual({
//         type:'ADD_EXPENSE',
//         expense:{
//             description:''
//             ,amount:0
//             ,createdAt:0
//             ,note:''
//             ,id:expect.any(String)
//         }
//     })
// })