
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"


export default function Pricing() {
  const roomTypes = useSelector((state) => state.roomTypes.all);
  const navigate = useNavigate()
  const tiers = [
    {
      buttonText: 'Enjoy this service',
      buttonVariant: 'outlined',
    },
    {
      buttonText: 'More Details',
      buttonVariant: 'contained',
    },{
      buttonText: 'Live the experience',
      buttonVariant: 'outlined',
    },
  ];
  return (
    <>
      <Container disableGutters component="section" sx={{ pt: 8, pb: 6, pl: 6, pr: 6, m: 4, margin: 'auto' }}>
        <Grid sx={{ p: 8 }}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Pricing
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" component="p">
            Quickly build an effective pricing table for your potential customers with
            this layout. It&apos;s built with default MUI components with little
            customization.
          </Typography>

        </Grid>

        <Grid container spacing={5} alignItems="flex-end" >
          {roomTypes.map((type, id) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={type.name}
              xs={12}
              sm={type.name === 'Enterprise' ? 12 : 6}
              md={4}
              sx= {{ bgImage: type.img}}
            >
              <Card>
                <CardHeader
                  title={type.name}
                  subheader={type.name}
                  titleTypographyProps={{ align: 'center' }}
                  action={type.name === 'Suite Imperial' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      ${type.price}
                    </Typography>
                    <Typography variant="small" color="text.secondary">
                      p/n
                    </Typography>
                  </Box>
                  <ul style={{ padding: 0}}>
                    {type.services.map((line) => (
                      <Typography
                        component="div"
                        variant="subtitle2"
                        align="center"
                        key={line}

                      >
                        <StarIcon style={{ fontSize: "10px" }}/> {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button onClick={() =>navigate(`./room/${++id}`)} color="secondary" fullWidth variant={tiers[id].buttonVariant}>
                    {tiers[id].buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}
