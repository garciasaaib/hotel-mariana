import React, { Component } from 'react'
import { ReactSession } from 'react-client-session';
import { Link as A } from 'react-router-dom'

import {
  TextField,
  Box,
  Button,
  Grid,
  Link,
  Avatar,
  Typography,
  FormControlLabel,
  Checkbox
} from '@mui/material'
import { AccessAlarm } from "@mui/icons-material";

export default class Login extends Component {
  constructor(props) {
    super(props)
    ReactSession.setStoreType("sessionStorage")

    this.state = {
      inputs: [
        {
          label: "Email Address",
          name: "email",
          type: "email",
          validate: (data) => {
            if (data === undefined || data === "") return "Required"
            if (!(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(data))) return
            return ''
          }
        },
        {
          label: "Password",
          name: "password",
          error: ["Must have 8 or more characters"],
          validate: (data) => {
            if (data === undefined || data === "") return "Required"
            if (data.length < 8) return "Must be 8 or more characters"
            return ''
          },
          type: "password"
        }
      ],
      error: {
        email: '',
        password: ''
      }
    }






  }
  // handleChange = (e) => {
  //   const { name, value } = e.target
  //   const { values } = this.state
  //   this.setState({ values: { ...values, [name]: value } })
  // }

  componentDidMount = () => {
    fetch("http://localhost:3001/api/v1/auth/create").then(res => console.log(res.json()))

  }
  handleSubmit = async (e) => {
    e.preventDefault()

    // get data from form
    const data = new FormData(e.currentTarget);
    const formData = {
      email: data.get('email'),
      password: data.get('password'),
    }

    // validate values
    const error = this.state.error
    const errorAmount = Object.values(this.state.inputs).filter(({ name, validate }) => {
      const input = formData[name]
      const validation = validate(input)
      error[name] = validation
      return validation
    })
    this.setState({ error })

    // send data to api
    if (!errorAmount.length) {
      try {
        let res = await fetch('http://localhost:3001/api/v1/auth/signin', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        res = await res.json()
        const { state, data: { token, email, nickname } } = res
        if (state !== 'Success') throw new Error({ msg: "Error" })
        // console.log(data);
        ReactSession.set("token", token);
        ReactSession.set("email", email);
        ReactSession.set("nickname", nickname);
        // refresh page
        this.props.toggleSession()
      } catch (error) {
        console.error('Error:', error)
      }
    }
    else console.log("si hay errores")

  }

  cleanError = (e) => {
    const { name } = e.target
    const error = this.state.error
    this.setState({ error: { ...error, [name]: '' } })
  }

  render() {
    return (
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <AccessAlarm />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={this.handleSubmit}
          sx={{ mt: 1 }}
        >
          {this.state.inputs.map(input => {
            const { name, type, value, label } = input
            const error = this.state.error[name]
            return (
              <TextField
                key={name}
                type={type}
                label={label}
                value={value}
                name={name}
                margin="normal"
                required
                fullWidth
                onChange={this.cleanError}
                // helperText={input.validate(input.value)}
                helperText={!error.length ? '' : error}
                error={!error.length ? false : true}
              />
            )
          })}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            value="Iniciar Sesion"
            variant="contained"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
          >Log in</Button>
          <Grid container>
            <Grid item xs>
              <A to="/forgotpassword">
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
              </A>
            </Grid>
            <Grid item>
              <A to="/register">
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </A>
            </Grid>
          </Grid>
        </Box>
      </Box>
    )
  }
}
