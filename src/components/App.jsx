import React, {Component} from 'react'
import { connect } from 'react-redux'
import { firebaseApp } from '../firebase'
import AddToDo from './AddToDo'
import ToDoList from './ToDoList'


class App extends Component {
  signOut(){
    firebaseApp.auth().signOut()
  }
  render(){
    return(
      <div style={{margin: '5px'}}>
        <h3>To-Dos</h3>
        <AddToDo />
        <ToDoList />
        <button
          className="btn btn-danger"
          onClick={() => this.signOut()}
        >
        Sign Out
        </button>
      </div>
    )
  }
}

function mapStateToProps(state){
  console.log('state', state)
  return{}
}
export default connect(mapStateToProps, null)(App)
