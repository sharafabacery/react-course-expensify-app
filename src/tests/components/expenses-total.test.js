import getExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expeneses'
test('should return 0 if no expenses',()=>{
   const total=getExpensesTotal([])
   expect(total).toBe(0)
})

test('should correctly add up a single expense ',()=>{
    const total=getExpensesTotal([])
    expect(total).toBe(0)
    
})


test('should correctly add up a muliple expense ',()=>{
    const total=getExpensesTotal([])
    expect(total).toBe(0)
    
})