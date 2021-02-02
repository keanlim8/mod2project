import React, { Component } from 'react'
import { connect } from 'react-redux'
import { todoRef } from '../firebase'
import { setTodos } from '../actions'
import ToDoItem from './ToDoItem'

class ToDoList extends Component {
  componentDidMount(){
    todoRef.on('value', snap => {
      let todos = []
      snap.forEach(todo => {
        const { email, title } = todo.val()
        const serverKey = todo.key
        todos.push({email, title, serverKey})
        // console.log('todo', todo)
      })
      this.props.setTodos(todos)
    })
  }

  render(){
    // console.log('this.props.todos', this.props.todos)
    return(
      <div>
      {
        this.props.todos.map((todo, index) => {
          return (
            <ToDoItem key={index}
                      todo={todo}
            />
          )
        })
      }
      </div>
    )
  }
}

function mapStateToProps(state){
  const { todos } = state
  return{
    todos
  }
}

export default connect(mapStateToProps, { setTodos })(ToDoList)
