import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expeneses'
 
test('should set default state',()=>{

    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([])

})

test('should remove expense by id',()=>{
    const action={
        type:'REMOVE_EXPENSE',
        id:'2'
    }
    const state=expensesReducer(expenses,action)
    expect(state).toEqual([expenses[0],expenses[2]])
}) 
test('should not remove expense if id not found by id',()=>{
    const action={
        type:'REMOVE_EXPENSE',
        id:'4'
    }
    const state=expensesReducer(expenses,action)
    expect(state).toEqual(expenses)
}) 
test('should add new expense',()=>{
    const expense={
        id:'4',
        description:'water',
        note:'',
        amount:195,
        createdAt:0
    }
    const action={
        type:'ADD_EXPENSE'
        ,
        expense
    }
    const state=expensesReducer(expenses,action)
    expect(state.length).toEqual(4)
})
test('should edit an expense',()=>{
    const updates={
        
        description:'water',
        note:'',
        amount:195,
        createdAt:0
    }
    const action={
        type:'EDIT_EXPENSE'
        ,
        id:'3',
        updates
    }
    const state=expensesReducer(expenses,action)
    expect(state[2]).toEqual({
        id:'3',
        description:'water',
        note:'',
        amount:195,
        createdAt:0
    })

})

test('should not edit an expense if expense not found',()=>{
    const updates={
        
        description:'water',
        note:'',
        amount:195,
        createdAt:0
    }
    const action={
        type:'EDIT_EXPENSE'
        ,
        id:'4',
        updates
    }
    const state=expensesReducer(expenses,action)
    expect(state).toEqual(expenses)

})