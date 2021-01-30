import React, { Component } from 'react'
import { connect } from 'react-redux'
import { todoRef } from '../firebase'

class AddToDo extends Component {
  state = {
    title: ''
  }

  addToDo(){
    console.log('this', this)
    const { title } = this.state
    const { email } = this.props
    todoRef.push({email, title})
  }

  render(){
    return (
      <div className="form-inline">
        <div className="form-group">
          <input
          type="text"
          placeholder="add a to-do"
          className="form-control"
          style={{marginRight: '5px'}}
          onChange={event => this.setState({title: event.target.value})}
          />
          <button
          className="btn btn-success"
          type="button"
          onClick={() => this.addToDo()}
          >
          Submit
          </button>
        </div>

      </div>
    )
  }
}
function mapStateToProps(state){
  const { email } = state
  return {
    email
  }
}
export default connect(mapStateToProps, null)(AddToDo)
