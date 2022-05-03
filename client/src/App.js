// components
import { Component } from 'react'
// styles
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material'
import { CssBaseline } from '@mui/material';
import Router from './router'


const theme = createTheme('black')

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme} className="App">
      <Container  >
        <CssBaseline />
        <Router/>
      </Container>
    </ThemeProvider>
    )
  }
}