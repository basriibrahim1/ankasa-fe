import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import slider1 from '../assets/1.png'
import slider2 from '../assets/2.png'
import Image from "next/image";

const ImageSlider = () => {
  return (
    <>
        <div className='relative'>
                <div className='bg-gray-400 inline-block px-3 py-2 absolute rounded-lg m-3 opacity-80 z-10'>
                            <h3 className='text-white'>15 Airlines</h3>
                        </div>
                        <Image src={slider1} width={200} height={200} className='rounded-lg relative' style={{background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)'}}/>
                        <div className='absolute flex items-center bottom-1 m-3 justify-between z-10 text-white'>
                            <div>
                                <h3 className='text-xs'>Tokyo,</h3>
                                <h3 className='font-bold tracking-wider'>Japan</h3>
                            </div>
                            <ArrowForwardIosIcon className='text-xs bg-gray-500 opacity-80 rounded-full p-1 ml-14'/>
            </div>
        </div>
    </>
  )
}

export default ImageSlider