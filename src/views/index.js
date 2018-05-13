import React, { Component } from 'react';
import ToDoList from './todolist'
import ToDoForm from './todoform';

function handleSubmit (text) {
    this.setState({
      todos: [...this.state.todos, {text, completed:true}]
      
    }) 
}

class App extends Component {
    state = {
        todos: []
        }
  render() {
    return (
      <div className="app">
        <ToDoForm handleSubmit={handleSubmit.bind(this)}/>
        <ToDoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
