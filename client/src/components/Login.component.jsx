import React, { Component } from 'react'
import { ReactSession } from 'react-client-session';

import {
  TextField, 
  Box
} from '@material-ui/core'

export default class Login extends Component {
  constructor(props) {
    super(props)
    ReactSession.setStoreType("sessionStorage")

    this.state = {
      inputs: {
        user: {
          name: "user",
          error: [],
        },
        password: {
          name: "password",
          error: [],
        }
      },
      values: {
        user: "",
        password: ""
      }
    }
  }
  handleChange=(e)=> {
    const { name, value } = e.target
    console.log(name, value);
    // this.setState({value})
  }
  handleSubmit= (e)=>{
    e.preventDefault()
    console.log(this.state.form)
  }

  render() {
    const { user, password: pass } = this.state.form
    return (
      <div>
        <Box component="form" noValidate onSubmit={this.handleSubmit} sx={{ mt: 1 }} onSubmit={this.handleSubmit}>

            <TextField
              type="text"
              label
              value={value}
              name={user.name}
              onChange={this.handleChange}
            />

            <TextField
              type="text"
              value={pass.value}
              name={pass.name}
              onChange={this.handleChange}
            />
          <input type="submit" value="Iniciar Sesion" />
        </Box>
      </div>
    )
  }
}
