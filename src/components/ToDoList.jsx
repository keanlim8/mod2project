import React, { Component } from 'react'
import { todoRef } from '../firebase'
class ToDoList extends Component {
  componentDidMount(){
    todoRef.on('value', snap => {
      let todos = []
      snap.forEach(todo => {
        let todoObject = todo.val()
        const { email, title } = todo.val()
        todos.push({email, title})
      })
      console.log('todos', todos)
    })
  }

  render(){
    return(
      <div>To-Do List</div>
    )
  }
}

export default ToDoList
