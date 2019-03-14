import React,{ Component } from 'react'
class User extends Component 
{
    render(){
        return(
            <div>
            <p>{this.props.name}</p>
            <p>{this.props.children}</p>
            </div>
            
        )
    }
}

export default User