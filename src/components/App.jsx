import React, {Component} from 'react'
import { connect } from 'react-redux'
import { firebaseApp } from '../firebase'
import AddToDo from './AddToDo'
import ToDoList from './ToDoList'
import CompleteToDoList from './CompleteToDoList'


class App extends Component {
  signOut(){
    firebaseApp.auth().signOut()
  }
  render(){
    return(
      <div className='card'>
        <h2>🎯Mini Trello Board📌</h2>
        <AddToDo />
        <hr />
        <h4>To-dos⏳</h4>
        <ToDoList />
        <hr />
        <h4>Completed To-dos🏁</h4>
        <CompleteToDoList />
        <hr />
        <button
          className="btn btn-dark"
          onClick={() => this.signOut()}
        >
        Sign Out
        </button>



      </div>
      )
  }
}

function mapStateToProps(state){
  // console.log('state', state)
  return{}
}
export default connect(mapStateToProps, null)(App)
