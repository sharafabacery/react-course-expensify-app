import React from 'react'
import { shallow } from 'enzyme';

// import ReactShallowRenderer from 'react-test-renderer/shallow'
import LoadingPage from '../../components/LoadingPage'

test('should render Header Correclty',()=>{
    const wrapper=shallow(<LoadingPage />)
    expect(( wrapper)).toMatchSnapshot()
    

})