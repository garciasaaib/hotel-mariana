import React from 'react'
import { useNavigate } from 'react-router-dom'
import fieldsSchema from '../../helpers/fields'
import { useFormik } from 'formik';
import schema from '../../helpers/schemas'
import { ReactSession } from 'react-client-session';

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

export default function Login() {
  const navigate = useNavigate()
  const [finished, setFinished] = React.useState(false)
  const fields = fieldsSchema.login
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema.login,
    onSubmit: (values) => {
      setFinished(true)

      // api request

      //success request 
      ReactSession.setStoreType("sessionStorage");
      ReactSession.set("username", "Bob");
    },
  });
  


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
        onSubmit={formik.handleSubmit}
        sx={{ mt: 1 }}
      >
        {fields.map(input => {
          const { name, type, label } = input
          return (
            <TextField
              key={name}
              type={type}
              label={label}
              name={name}
              margin="normal"
              required
              fullWidth
              value={formik.values[name]}
              onChange={formik.handleChange}
              error={formik.touched[name] && Boolean(formik.errors[name])}
              helperText={formik.touched[name] && formik.errors[name]}
            />
          )
        })}
        <FormControlLabel
          control={
            <Checkbox
              color="secondary"
              onChange={formik.handleChange}
              name="remember"
              type="checkbox"
            />
          }
          label="Remember me"
        />
        <Button
          color="secondary"
          type="submit"
          value="Iniciar Sesion"
          variant="contained"
          fullWidth
          sx={{ mt: 3, mb: 2 }}
        >Log in</Button>
        <Grid container>
          <Grid item xs>
            <Link onClick={() => navigate('/forgotpassword')} color="secondary" href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link onClick={() => navigate('/register')} color="secondary" href="/register" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
