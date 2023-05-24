import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import slider1 from '../assets/1.png'
import slider2 from '../assets/2.png'
import Image from "next/image";
import Carousel from 'react-elastic-carousel'

const ImageSlider = () => {
    const data = [
      {
        id: 1,
        image: slider1,
        city: 'tokyo',
        country: 'japan',
        airlines: '15 Airlines'
      },
      {
        id: 1,
        image: slider1,
        city: 'tokyo',
        country: 'japan',
        airlines: '15 Airlines'
      },
      {
        id: 1,
        image: slider1,
        city: 'tokyo',
        country: 'japan',
        airlines: '15 Airlines'
      },
      {
        id: 1,
        image: slider1,
        city: 'tokyo',
        country: 'japan',
        airlines: '15 Airlines'
      },
      {
        id: 1,
        image: slider1,
        city: 'tokyo',
        country: 'japan',
        airlines: '15 Airlines'
      },
      {
        id: 1,
        image: slider1,
        city: 'tokyo',
        country: 'japan',
        airlines: '15 Airlines'
      },
      {
        id: 1,
        image: slider1,
        city: 'tokyo',
        country: 'japan',
        airlines: '15 Airlines'
      },
    ]


    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 3 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 6 }
      ];

  return (
    <>

        <Carousel breakPoints={breakPoints}>
            {data.map((item, index) => (
                <div className='relative flex flex-col' key={index}>
                         <Image src={item.image} width={200} height={200} className='rounded-lg relative' style={{background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)'}}/>
                </div>
            ))}
        </Carousel>
    </>
  )
}

export default ImageSlider