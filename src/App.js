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
    var { isLoaded,person} =this.state;
    
    if(!isLoaded){
      return(
        <div>Loading...</div>
      )
    }
    else{
      return (
        <div className="App">
        <ul>
         {
            person.map(person =>(
            <li key={person.id}>
              {person.name}

            </li>
           ))}
         </ul>
        </div>
      );
    }
    
  }
}

export default App;
