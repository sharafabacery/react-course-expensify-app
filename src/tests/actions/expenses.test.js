import { addExpense,removeExpense,editExpense } from '../../actions/expenses';

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
    const expenseData={
        description:"Rent",
        amount:10900,
        createdAt:1000,
        note:''
    }
    const action=addExpense(expenseData)
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData
            ,id:expect.any(String)
        }
    })


})

test('should setup add expense action object with default values',()=>{
    const action=addExpense()
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            description:''
            ,amount:0
            ,createdAt:0
            ,note:''
            ,id:expect.any(String)
        }
    })
})