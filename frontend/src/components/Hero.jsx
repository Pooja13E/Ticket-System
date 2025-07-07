import React from 'react'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
  
const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    maxHeight: '100%'
}

const slideImages = [
    {
      url: 'https://img.freepik.com/free-photo/man-electrical-technician-working-switchboard-with-fuses_169016-24062.jpg?w=2000',
      caption: 'Slide 1'
    },
    {
      url: 'https://morningsideplumbing.com/wp-content/uploads/2022/09/Emergency-Plumber-Atlanta.png',
      caption: 'Slide 2'
    },
    {
      url: 'https://img.freepik.com/free-photo/carpenter-cutting-mdf-board-inside-workshop_23-2149451074.jpg?w=2000',
      caption: 'Slide 3'
    },
    {
      url: 'https://www.digitaltrends.com/wp-content/uploads/2018/05/insecure_router_getty.jpg?p=1',
      caption: 'Slide 4'
    },
    {
      url: 'https://bookdirtbusters.com/wp-content/uploads/2020/10/house-cleaning-service.jpeg',
      caption: 'Slide 5'
    }
];


const Hero = () => {
  return (
    <>
    <h2 style={{color:'#FF8989'}}>Services Provided</h2>
    <div className='hero--slider'>
        <Fade arrows={false} duration={980} pauseOnHover={false}>
        {slideImages.map((fadeImage, index) => (
          <div style={{...divStyle}} key={index}>
            <img style={{ width: '75%', borderRadius:'50px' }} src={fadeImage.url} />
          </div>
        ))}
      </Fade>
    </div>
    </>
  )
}

export default Hero