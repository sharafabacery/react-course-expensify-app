import selectExpenses from '../../selectors/expenses';
import moment from 'moment'
import expenses from '../fixtures/expeneses'

test('should filterby text value',()=>{
    const filters={text:'e',sortBy:'date',startDate:undefined,endDate:undefined}   
    
    const result=selectExpenses(expenses,filters)
     
    expect(result).toEqual([expenses[2],expenses[1]])
})

test('should filter by startDate',()=>{
    const filters={text:'',sortBy:'date',startDate:moment(0),endDate:undefined}
    const result=selectExpenses(expenses,filters)
    expect(result).toEqual([expenses[2],expenses[0]])   
     
})

test('should filter by end date',()=>{
    const filters={text:'',sortBy:'date',startDate:moment(0),endDate:moment(0).add(5,'days')}
    const result=selectExpenses(expenses,filters)
    expect(result).toEqual([expenses[2],expenses[0]]) 
})

test('should sort by date',()=>{
    const filters={text:'',sortBy:'date',startDate:undefined,endDate:undefined}
    const result=selectExpenses(expenses,filters)
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]]) 

})
test('should sort by amount',()=>{
    const filters={text:'',sortBy:'amount',startDate:undefined,endDate:undefined}
    const result=selectExpenses(expenses,filters)
    expect(result).toEqual([expenses[2],expenses[1],expenses[0]]) 

})
