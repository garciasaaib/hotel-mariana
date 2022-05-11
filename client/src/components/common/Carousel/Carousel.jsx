import * as React from 'react';
import './styles.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardIos';
import {Container, Typography} from '@mui/material';


export default function Carousel({data}) {
  const [slide, setSlide] = React.useState(1)
  const maxSlides = data.images.length
  return (
    <>
      {/* <!-- Slideshow container --> */}
      <div className="slideshow-container">
        {data.images.map((image, id) =>
          <div className={`mySlides fade${slide===(++id)?" show":""}`}>
            <div className="numbertext">{++id}</div>
            <img className="mySlideImage"alt={image.alt} src={image.url} />
            <Typography className="text">{image.alt}</Typography>
          </div>
        )}

        {/* <!-- Next and previous buttons --> */}
        <button className="prev" onClick={() => setSlide(slide - 1 || maxSlides)}><ArrowBackIcon /></button>
        <button className="next" onClick={() => setSlide(slide===maxSlides? 1 : slide + 1)}><ArrowForwardIcon /></button>
      </div>
      <br />

      {/* <!-- The dots/circles --> */}
      <Container sx={{margin: 'auto'}} >
        {data.images.map((_, id) =>
        <span key={id} className={`dot${++id===slide?" active":""}`} onClick={() => setSlide(id)}></span>
          )}
      </Container>
    </>
  )
}