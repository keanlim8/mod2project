import React, {Component} from 'react'
import { Link } from 'react-router'
import { firebaseApp } from '../firebase'

class SignUp extends Component {
  state = {
    email:'',
    password:'',
    error: {
      message: ''
    }
  }

  signUp(){
    console.log('this.state', this.state)
    const { email, password } = this.state
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({error})
      })
  }
  render(){
    return(
      <div className="card">
        <h2>Sign Up</h2>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              style={{marginRight: '5px', marginTop: '5px'}}
              placeholder="email"
              onChange={event => this.setState({email: event.target.value})}
            />
            <input
              className="form-control"
              type="password"
              style={{marginRight: '5px', marginTop: '5px'}}
              placeholder="password"
              onChange={event => this.setState({password: event.target.value })}
            />
            <button
              className="btn btn-primary"
              type="button"
              style={{marginTop: '5px'}}
              onClick={() => this.signUp()}
            >
            Sign Up
            </button>
          </div>
          <div>{this.state.error.message}</div>
          <div><Link to={'/signin'}>Already signed up? Please sign in</Link></div>
      </div>
    )
  }
}
export default SignUp
