import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import fields from '../../../helpers/fields'
import schema from '../../../helpers/schemas'
import axios from 'axios'
import { AccessAlarm } from "@mui/icons-material";
import swal from 'sweetalert';
import {
  TextField,
  Box,
  Button,
  Grid,
  Link,
  Avatar,
  Typography,
  Container
} from '@mui/material'
export default function FormForgotPassword() {
  const navigate = useNavigate()
  const [finished, setFinished] = React.useState(false)
  const field = fields.forgotpassword
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: schema.forgotpassword,
    onSubmit: (values) => {
      setFinished(true)
      console.log(values)
      swal("Good job!", "Now check your email to enter your password!", "success");

    },
  });

  return (
    <Container
      component="form"
      noValidate
      onSubmit={formik.handleSubmit}
      sx={{ mt: 1 }}
    >
      <TextField
        disabled={finished ? true : false}
        type={field.type}
        label={field.label}
        name={field.name}
        margin="normal"
        required
        fullWidth
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      {finished &&
        <Typography component="p" variant="p">
          Check your email to reset your account
        </Typography>
      }
      <Button
        disabled={finished ? true : false}
        type="submit"
        value="Iniciar Sesion"
        variant="contained"
        fullWidth
        sx={{ mt: 3, mb: 2 }}
        color="secondary"
      >Send Email</Button>

    </Container>
  )
}
