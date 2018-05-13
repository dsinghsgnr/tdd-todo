import React, {Component} from 'react'

function handleChange(e) {
    this.setState ({
        inputText: e.target.value
    })
}
function handleSubmit(e) {
    e.preventDefault()
    this.props.handleSubmit(this.state.inputText)
}

class ToDoForm extends Component {

state = {
    inputText: ''
}
    
render() {
        return(
            <div className='todoform'>
                <form onSubmit={handleSubmit.bind(this)}>
                    <input onChange={handleChange.bind(this)} value={this.state.inputText}/>
                    <button>Add ToDo List</button>
                
                </form>
            </div>
        )
    }
}


export default ToDoForm