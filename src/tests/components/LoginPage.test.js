import React from 'react'
import{shallow} from 'enzyme'
import LoginPage from '../../components/LoginPage'


test('should render AddExpensePage correctly',()=>{
  const  Wrapper=shallow(<LoginPage />)
    expect(Wrapper).toMatchSnapshot()
})
test('should call startLogout',()=>{
  const startLogin=jest.fn()
  
  const wrapper=shallow(<LoginPage startLogin={startLogin}/>)

  wrapper.find('button').simulate('Click')

  expect(( startLogin)).toHaveBeenLastCalledWith()

  


})