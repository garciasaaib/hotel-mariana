// components
import { Component } from 'react'
// styles
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Router from './components/router'


const theme = createTheme({
  theme: "dark",
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'standard'
      },
    },
  },
})

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme} >
        <CssBaseline />
        <Router />
      </ThemeProvider>
    )
  }
}