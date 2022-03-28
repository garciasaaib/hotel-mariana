// components
import { Component } from 'react'
import Profile from './components/pages/Profile.component'
// styles
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material'
import { CssBaseline } from '@mui/material';

const theme = createTheme()

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme} className="App">
      <Container  >
        <CssBaseline />
        <Profile />
      </Container>
    </ThemeProvider>
    )
  }
}


