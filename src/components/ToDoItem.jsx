import React, { Component } from 'react'
import { connect } from 'react-redux'
import { completeToDoRef, todoRef } from '../firebase'

class ToDoItem extends Component {
  completeToDo(){
    const { email } = this.props.user
    const { title, serverKey } = this.props.todo
    console.log('serverKey', serverKey)
    todoRef.child(serverKey).remove()
    completeToDoRef.push({email, title})
  }

  render(){
    // console.log('this.props.todo', this.props.todo)
    const { email, title} = this.props.todo
    return(
      <div className='card2'><li>
        <strong>{title}</strong>
        <span style={{marginRight: '5px'}}> submitted by <em>{email}</em></span></li>
          <button className="btn btn-sm btn-success"
                  onClick={() => this.completeToDo()}
          >
          Complete
          </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { user } = state
  return {
    user
  }
}

export default connect(mapStateToProps, null)(ToDoItem)
