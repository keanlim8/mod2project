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
    const { email } = this.props.user
    todoRef.push({email, title})
  }

  render(){
    return (
      <div className="form-inline">
        <div className="form-group">
          <input
          type="text"
          placeholder="Add a to-do"
          className="form-control"
          style={{marginTop: '5px', marginRight: '10px', width:'70%'}}
          onChange={event => this.setState({title: event.target.value})}
          />
          <button
          className="btn btn-info"
          type="button"
          style={{marginTop: '5px'}}
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
  const { user } = state
  console.log('state in AddToDo.jsx', state)
  return {
    user
  }
}
export default connect(mapStateToProps, null)(AddToDo)
