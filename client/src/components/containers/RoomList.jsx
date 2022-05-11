import React from 'react'
import CardRoom from '../common/Cards/CardRoom'
import { Box, Container } from '@material-ui/core'
export default function RoomList() {
  return (
    <Box centered sx={{
      background: "red"
    }}>
      <Container>

        <CardRoom />
        <CardRoom />
        <CardRoom />
      </Container>
    </Box>
  )
}
