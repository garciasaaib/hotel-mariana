import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import fields from '../../helpers/fields'
import schema from '../../helpers/schemas'
import axios from 'axios'
import { AccessAlarm } from "@mui/icons-material";
import {
  TextField,
  Box,
  Button,
  Avatar,
  Typography,
} from '@mui/material'

export default function ForgotPassword() {
  const navigate = useNavigate()
  const [finished, setFinished] = React.useState(false)
  const field = fields.newpassword
  const formik = useFormik({
    initialValues: {
      newpassword: '',
    },
    validationSchema: schema.newpassword,
    onSubmit: (values) => {
      setFinished(true)
      console.log(values)
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
        New Password
      </Typography>
      <Box
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
          value={formik.values.newpassword}
          onChange={formik.handleChange}
          error={formik.touched.newpassword && Boolean(formik.errors.newpassword)}
          helperText={formik.touched.newpassword && formik.errors.newpassword}
        />
        <Button
          disabled={finished ? true : false}
          type="submit"
          value="Iniciar Sesion"
          variant="contained"
          fullWidth
          sx={{ mt: 3, mb: 2 }}
          color="secondary"
        >Set New Password</Button>
      </Box>
    </Box>
  )
}
