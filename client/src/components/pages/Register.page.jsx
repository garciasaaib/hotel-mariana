import * as React from 'react';
import { useNavigate } from 'react-router-dom'
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import fieldsSchema from '../../helpers/fields'
import schema from '../../helpers/schemas'
import { useFormik } from 'formik';


export default function Register() {
  const navigate = useNavigate()
  const [finished, setFinished] = React.useState(false)
  const fields = fieldsSchema.register
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      firstname: '',
      lastname: ''
    },
    validationSchema: schema.register,
    onSubmit: (values) => {
      setFinished(true)
      console.log(values)
    },
  });


  return (
    <Box
      sx={{
        marginTop: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
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
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="I want to receive inspiration, marketing promotions and updates via email."
            onChange={formik.handleChange}
            name="email"
          />
        </Grid>

        <Button
          color="secondary"
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link onClick={() => navigate('/login')} color="secondary" href="#" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
