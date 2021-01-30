import React, { Component } from 'react'

class ToDoItem extends Component {
  render(){
    console.log('this.props.todo', this.props.todo)
    const { email, title} = this.props.todo
    return(
      <div style={{margin: '5px'}}>
        <strong>{title}</strong>
        <span> submitted by <em>{email}</em></span>
      </div>
    )
  }
}

export default ToDoItem
