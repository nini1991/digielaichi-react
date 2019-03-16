import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import User from './components/User'
class App extends Component {
  state={
    person: [],
    isLoaded:false
  }

componentDidMount(){
axios.get('https://jsonplaceholder.typicode.com/users')
.then(res => 
  {
    this.setState({
      isLoaded:true,
      person:res.data,
    })
    console.log(res);
  });

}
  render() {
    const isLoaded=this.state.isLoaded;
    const person = this.state.person.map(person =>{

       return (
        <div>
        <User key={person.id} name={person.name} email={person.email}></User>
        </div>
       )
       
    });
    
    if(!isLoaded){
      return(
        
      <div class="spinner-border text-primary" role="status" style={{ width: "350px",  padding: "16px", margin: "10px",
                boxsizing: "border-box", cursor: "pointer" }}>
      </div>
      )
    }
    else{
      return (
        <div className='Users' >
        {person}
        </div>
      );
    }
    
  }
}

export default App;
