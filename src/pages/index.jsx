import React from 'react'
import Image from "next/image";
import tokyo from '../assets/tokyo.png'
import jpn from '../assets/jpn.png'
import circle from '../assets/circle.png'
import { Link } from '@mui/material';
import ImageSlider from '@/component/slider';
import slide3 from '../assets/3.png'
import slide4 from '../assets/4.png'
import slide5 from '../assets/5.png'
import slide6 from '../assets/6.png'
import { ArrowBackIosNew } from '@mui/icons-material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Layout from '@/component/layout';



export default function Home() {
  return (
    <Layout>
       
        <div className='mt-24 h-2/6'>
            <div className='flex justify-between w-full items-center'>
                <div className='flex flex-col lg:ml-40 ml-5 space-y-6'>
                    <h3 className='text-5xl font-semibold'>Find your <span className='text-blue-600'>Flight</span> </h3>
                    <h3 className='text-xl' style={{color:'#979797'}}>and explore the world with us</h3>
                </div>
                <Image className='md:flex hidden' src={tokyo} width={400} height={300} style={{objectFit:'contain'}}/>
            </div>
            <div className='justify-between flex mt-10 md:mt-0'>
                <Image src={jpn} height={300} width={800} style={{objectFit:'contain'}} className='rounded-xl'/>
                <Image src={circle} height={150} width={200} style={{transform:'rotate(2deg)'}} className='me-40 mt-72 hidden lg:flex'/>
            </div>

            <div className='xl:px-40 px-5 md:mt-20 mt-10'>
                <h3 className='tracking-widest text-blue-400'>TRENDING</h3>
                <div className='flex justify-between mt-10 items-center'>
                    <h2 className='font-bold text-lg'>Trending Destination</h2>
                    <Link>View All</Link>
                </div>
                <div className='mt-10 flex flex-row space-x-5'>
                   <ImageSlider />
                </div>


                <div className='bg-blue-400 md:flex rounded-3xl overflow-hidden w-full xl:px-40 items-center justify-center flex flex-col space-y-7 mt-10'>
                    <h3 className='mt-10 text-white tracking-widest text-xs'>TOP 10</h3>
                    <h3 className='text-white font-semibold text-lg tracking-wide'>Top 10 Destinations</h3>
                    <div className='flex space-x-5'>
                        <Image src={slide3} width={150} height={150} className='bg-white p-2 rounded-full'/>
                        <Image src={slide4} width={150} height={150} className='bg-white p-2 rounded-full'/>
                        <Image src={slide5} width={150} height={150} className='bg-white p-2 rounded-full'/>
                        <Image src={slide6} width={150} height={150} className='bg-white p-2 rounded-full'/>
                        <Image src={slide4} width={150} height={150} className='bg-white p-2 rounded-full'/>
                    </div>
                    <div className='flex space-x-10 pb-10'>
                        <div className='border-2 border-white px-4 py-2 rounded-md'>
                            <ArrowBackIosNew className='text-white text-lg'/>
                        </div>
                        <div className='bg-white px-4 py-2 rounded-md'>
                            <ArrowForwardIosIcon className='text-blue-400 text-lg'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}
