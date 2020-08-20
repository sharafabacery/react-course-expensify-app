import {createStore} from 'redux'
 
const increamentCount=({increamentBy=1}={})=>({
    type:'INCREAMENT',
     increamentBy
    })

const decreamentcount=({decreamentBy=1}={})=>({
    type:'DECREAMENT',
    decreamentBy
}) 

const resetCount=()=>({
    type:'RESET'
}
    
)
const setCount=({count})=>(
    {
       type:'SET'
       ,count
    }
)
// Reducers
//1. Reducers are pure functions
//2. Never change state or action

const countReducer=(state={count:0},action)=>{
        const {type}=action 
    switch (type) {
        case 'INCREAMENT':

            
            return{
            count:state.count+action.increamentBy
        }
        case 'DECREAMENT':
          
            return{
                count:state.count-action.decreamentBy
            }
        case 'RESET':
            return{
                count:0
            }
            case 'SET':
                return{
                    count:action.count
                }
        default:
            return state
            
    }
   
   
    
}

//no default state provided ,default in function
const store=createStore(countReducer)

const unsubscribe=store.subscribe(()=>{
    console.log(store.getState());
})

//console.log(store.getState())

//Actions - than an object that gets send to the store


// Id like to increament the count
// store.dispatch({
//     type:'INCREAMENT',
//     increamentBy:5
// })


store.dispatch(increamentCount({increamentBy:5}))
//unsubscribe()
store.dispatch(decreamentcount({decreamentBy:5}))
store.dispatch(resetCount({}))

store.dispatch(setCount({count:10}))

//console.log(store.getState())
