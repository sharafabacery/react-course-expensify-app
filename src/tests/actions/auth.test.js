import {login,logout} from '../../actions/auth'

test('should login action',()=>{
    const action=login('1234')

    expect(action).toEqual({
        type:'LOGIN',
        uid:'1234'
    })
})
test('should LOGOUT action',()=>{
    const action=logout()

    expect(action).toEqual({
        type:'LOGOUT'
    })
})