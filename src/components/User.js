import React,{ Component } from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import './User.css';
class User extends Component 
{
    render(){
        return(
<MDBCol>
                <MDBCard style={{ width: "350px",  padding: "16px", margin: "10px",
                boxsizing: "border-box", cursor: "pointer" }}>
                <MDBCardBody>
                    <MDBCardTitle>{this.props.name}</MDBCardTitle>
                    <MDBCardText>
                     {this.props.email}
                    </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
            
        )
    }
}

export default User