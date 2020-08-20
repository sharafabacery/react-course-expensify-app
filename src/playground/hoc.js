//higher order component (hoc) - A component (hoc) that renders another component
//reause code 
//rnder hijacking
//prop manipulation
//absract state
import React from 'react'
import ReactDOM from 'react-dom'

const Info=(props)=>(
    <div>
    <h1>Info</h1>
    <p>this is info {props.info}</p>
    
    
    </div>
)
const withAdminWarning=(WrappedComponent)=>{
    return (props)=>(
     <div>
     <p>this is private info</p>
     <WrappedComponent {...props}/>
     
     
     </div>
    )
}
const requireAuth=(WrappedComponent)=>{
    return(props)=>(
        <div>
        {props.isAuth ?<WrappedComponent/> :<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse officiis sed modi, optio enim corrupti accusantium et, maxime iure vitae tempora dicta qui voluptatem obcaecati reprehenderit voluptate hic commodi exercitationem.</p>}
        
        </div>
    )
}
const AuthInfo=requireAuth(Info)
const AdminInfo=withAdminWarning(Info)
ReactDOM.render(<AuthInfo isAuth={false} isAdmin={true } info='aaaaaaaaaa'/>,document.getElementById('app'))
