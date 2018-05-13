import React from 'react'

function TodoListItem (props) {
   
    
        return(
            <div className='todolistitem'>
                  <li>
                    <span>{props.todoname}</span>
                </li>
                <button>toggle</button>
            </div>
        )
    
   
}

export default TodoListItem