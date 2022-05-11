import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import fields from '../../helpers/fields'
import schema from '../../helpers/schemas'
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
} from '@mui/material'
import FormForgotPassword from '../common/Forms/FormForgotPassword'

export default function ForgotPassword() {
  const navigate = useNavigate()

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
        Recover Password
      </Typography>
      <Grid item>
        <FormForgotPassword />
      </Grid>
      <Grid item>
        <Link onClick={() => navigate('/login')} color="secondary" variant="body2">
          {"Return to login"}
        </Link>
      </Grid>
    </Box>
  )
}
