import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCompleted } from '../actions'
import { completeToDoRef } from '../firebase'

class CompleteToDoList extends Component {
  componentDidMount(){
    completeToDoRef.on('value', snap => {
      let completeToDos = []
      snap.forEach(completeToDo => {
      const { email, title } = completeToDo.val()
      completeToDos.push({email, title})
    })
    this.props.setCompleted(completeToDos)
    // console.log('completeToDos', completeToDos)
    })
  }

  clearCompleted(){
    completeToDoRef.set([])
  }

  randomColor(){

  }

  render(){
     // console.log('this.props.completeToDos',this.props.completeToDos)
    return(
      <div>
      {
        this.props.completeToDos.map((completeToDo, index) => {
          const { title, email } = completeToDo
          return(
            <div className='card3' key={index}>
            <li><strong>{title}</strong> completed by <em>{email}</em></li>
            </div>
          )
        })
      }
      <button
      className="btn btn-warning"
      onClick={()=>this.clearCompleted()}
      >
      Clear
      </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { completeToDos } = state
  return {
    completeToDos
  }
}
export default connect(mapStateToProps, {setCompleted})(CompleteToDoList)
