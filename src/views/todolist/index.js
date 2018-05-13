import React, { Component } from 'react'
import ToDoListItem from './todolistitem'

function renderTodos(todos){
   return todos.map(todo => <ToDoListItem key={todo.text} todoname={todo.text} />)
}

class ToDoList extends Component {
    render () {
        return (
            <section className='todolist'>
                <ul>{
                        renderTodos(this.props.todos)
                    }
                </ul>
            </section>
        )
    }
 
}

ToDoList.defaultProps = {
    todos: []
}

export default ToDoList