import React, { Component } from 'react';
import './App.css';
import UseInput from './components/Assignment 1/UseInput';
import UseOutput from './components/Assignment 1/UseOutput';
import Validation from './components/Assignment 2/Validation';
import Char from './components/Assignment 2/Char';
import Blog from "./components/Axios/containers/Blog/Blog";

export class App extends Component {
  state={
    userName:'Sangam_Bgk',
    userInput:''
  }
  useNameChangeHandler=(e)=>{
    this.setState({
      userName:e.target.value
    })
  }
  inputChangeHandler =(e) =>{
    this.setState({
      userInput:e.target.value
    });
  }
  deleteCharHandler=( index )=>{
    const text=this.state.userInput.split('');
    text.splice(index,1);
    const updatedText=text.join('');
    this.setState({userInput:updatedText})
  }
  render() {
    const ch=this.state.userInput.split('').map((ch,i)=>{
      return <Char clicked={()=>this.deleteCharHandler(i)} key={i} character={ch} />
    })
    return (
      <div className="App">
      <header className="App-header">
       <h1>Practice React with Maxmillan</h1> 
      </header>
      <fieldset>
         <legend>Axios Practice</legend>
         <Blog/>
       </fieldset>
      <fieldset>
         <legend>Assignment 2</legend>
         <input type="text"
          onChange={(event)=>this.inputChangeHandler(event)}
          value = {this.state.userInput}
         />
         <p>{this.state.userInput}</p>
         <Validation length={this.state.userInput.length}/>
          {ch}
       </fieldset>
       <fieldset>
         <legend>Assignment 1</legend>
          <UseInput 
          change={this.useNameChangeHandler} 
          currentName={this.state.userName}
          />
          <UseOutput userName={this.state.userName} />
          <UseOutput userName="Basav"/>
          <UseOutput userName="Shiv"/>
       </fieldset>
       
    </div>
    )
  }
}

export default App
