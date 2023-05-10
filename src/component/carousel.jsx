import React from 'react'
import Image from "next/image";
import slide3 from '../assets/3.png'
import slide4 from '../assets/4.png'
import slide5 from '../assets/5.png'
import slide6 from '../assets/6.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


const Carousel = () => {
    const arrowStylePrev = {
        left: '-50px',
        zIndex: 2,
        color: '#fff',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: '50%',
        cursor: 'pointer',
        padding: 6,
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center'
      };
      
      const arrowStyleNext = {
        right: '-50px',
        zIndex: 2,
        color: '#fff',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: '50%',
        cursor: 'pointer',
        padding:6,
    
        alignItems: 'center',
        justifyContent: 'center'
      };
      
      const PrevBtn = (props) => {
        const { onClick } = props;
        return (
          <div onClick={onClick} style={{ ...arrowStylePrev, ...props.style }}>
            <ArrowBackIosNewIcon />
          </div>
        );
      };
      
      const NextBtn = (props) => {
        const { onClick } = props;
        return (
          <div onClick={onClick} style={{ ...arrowStyleNext, ...props.style }}>
            <ArrowForwardIosIcon />
          </div>
        );
      };
      
      
      const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          className: "center",
          centerMode: true,
          slidesToShow: 5,
          slidesToScroll: 4,
          prevArrow: <PrevBtn />,
          nextArrow: <NextBtn />,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <>
        <div className='w-full p-40'>
        <Slider {...settings}>
          <div>
            <Image style={{objectFit:'cover'}} src={slide3} width={150} height={150} alt='slider' />
          </div>
          <div>
            <Image style={{objectFit:'cover'}} src={slide4} width={150} height={150} alt='slider' />
          </div>
          <div>
            <Image style={{objectFit:'cover'}} src={slide3} width={150} height={150} alt='slider' />
          </div>
          <div>
            <Image style={{objectFit:'cover'}} src={slide4} width={150} height={150} alt='slider' />
          </div>
          <div>
            <Image style={{objectFit:'cover'}} src={slide5} width={150} height={150} alt='slider' />
          </div>
          <div>
            <Image style={{objectFit:'cover'}} src={slide6} width={150} height={150} alt='slider' />
          </div>
        </Slider>
      </div>
    </> 
  )
}

export default Carousel