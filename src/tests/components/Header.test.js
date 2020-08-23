import React from 'react'
import { shallow } from 'enzyme';

// import ReactShallowRenderer from 'react-test-renderer/shallow'
import {Header} from '../../components/Header'

test('should render Header Correclty',()=>{
    const wrapper=shallow(<Header startLogout={()=>{}}/>)
    expect(( wrapper)).toMatchSnapshot()
    
    //expect(wrapper.find('h1').text()).toBe('Expensify')
    // const renderer=new ReactShallowRenderer()
    // renderer.render(<Header/>)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
    // //console.log()
})

test('should call startLogout',()=>{
    const startLogout=jest.fn()
    
    const wrapper=shallow(<Header startLogout={startLogout}/>)

    wrapper.find('button').simulate('Click')

    expect(( startLogout)).toHaveBeenLastCalledWith()

    


})