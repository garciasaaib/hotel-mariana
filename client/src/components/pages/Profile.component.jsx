import React, { Component } from 'react'
import Login from '../auth/Login.component'
import { ReactSession } from 'react-client-session';

export default class Profile extends Component {
  constructor(props) {
    super(props)
    ReactSession.setStoreType("sessionStorage");
    this.state = {
      user: {
        email: ReactSession.get("email") || "",
        nickname: ReactSession.get("nickname") || "",
        token: ""
      }
    }
    this.handleLogout = this.handleLogout.bind(this)
  }
  handleLogout() {
    Object.keys(this.state.user).forEach(item => {
      ReactSession.remove(item)
      window.location.reload(false)
    })
  }
  render() {
    const { user } = this.state
    return (
      <div>
        {this.state.user.email
          ? <>
            <div>Bienvenido {user.nickname}</div>
            <input type="submit" onClick={this.handleLogout} value="Cerrar Sesion"/>
          </>
          : <Login />
        }
      </div>
    )
  }
}
