import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import User from './components/User'
class App extends Component {
  state={
    person: []
  }

componentWillMount(){
axios.get('https://jsonplaceholder.typicode.com/users')
.then(res=>{
const person = res.data;
this.setState=({person}) ;
console.log(this.setState=({person}));
})
}
  render() {
    return (
      <div className="App">
       <User name={this.state.person[0].name}>hello</User>
      </div>
    );
  }
}

export default App;
