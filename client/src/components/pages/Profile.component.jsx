import React, { Component } from 'react'
import Login from '../auth/Login.component'
import { ReactSession } from 'react-client-session';

export default class Profile extends Component {
  constructor(props) {
    super(props)
    ReactSession.setStoreType("sessionStorage");
    this.state = {
      user: {}
    }
    this.handleLogout = this.handleLogout.bind(this)
    this.toggleSession = this.toggleSession.bind(this)


  }
  handleLogout() {
    // borrando sessionStorage
    Object.keys(this.state.user).forEach(item => {
      ReactSession.remove(item)
    })

    // borrando this.state user
    this.toggleSession()
  }
  toggleSession() {
    this.setState({
      user: {
        email: ReactSession.get("email") || "",
        nickname: ReactSession.get("nickname") || "",
        token: "",
      }
    })
  }
  render() {
    const { user } = this.state
    return (
      <div>
        {this.state.user.email
          ?
          <>
            <div>Bienvenido {user.nickname}</div>
            <input type="submit" onClick={this.handleLogout} value="Cerrar Sesion" />
          </>
          :
          <Login toggleSession={this.toggleSession}/>
        }
      </div>
    )
  }
}
