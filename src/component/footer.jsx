import React from 'react'
import ankasa from '../assets/ankasa.png'
import google from '../assets/google.png'
import apple from '../assets/apple.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CopyrightIcon from '@mui/icons-material/Copyright';
import PlaceIcon from '@mui/icons-material/Place';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='flex lg:flex-row flex-col lg:justify-around py-5 lg:py-10 w-full'>
            <div className='flex flex-col lg:ml-10 ml-5 lg:w-1/5'>
                <div className='flex items-center'>
                    <Image src={ankasa} alt='ankasa' className='w-20 h-10' style={{objectFit:'contain'}}/>
                    <h3 className='text-3xl font-bold text' style={{color:'#414141'}}>Ankasa</h3>
                </div>
                <h3 className='mt-10 tracking-wider'>Find your Flight and explore the world with us. We will take care of the rest</h3>
            </div>

            <div className='flex flex-col ml-5 lg:ml-0 mt-5 lg:mt-0 lg:me-10'>
                <h3 className='text-xl font-semibold text' style={{color:'#414141'}}>Features</h3>
                <div className='space-y-3 mt-5' style={{color:'#414141'}}>
                    <p>Find Ticket</p>
                    <p>My Booking</p>
                    <p>Chat</p>
                    <p>Notification</p>
                </div>
            </div>

            <div className='flex flex-col ml-5 lg:ml-0 mt-5 lg:mt-0 lg:items-center'>
                <h3 className='text-xl font-semibold text' style={{color:'#414141'}}>Download Ankasa App</h3>
                <div className='mt-5'>
                    <Image width={200} height={100} style={{objectFit:'contain'}} src={apple} alt='apple'/>
                    <Image className='mt-2' width={200} height={100} style={{objectFit:'contain'}} src={google} alt='google'/>
                </div>
            </div>

            <div className='flex flex-col xl:me-32 ml-5 lg:ml-0 mt-5 lg:mt-0'>
                <h3 className='text-xl font-semibold text' style={{color:'#414141'}}>Follow Us</h3>
                <div className='flex mt-5 space-x-2'>
                    <FacebookIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                    <YouTubeIcon />
                </div>
            </div>
        </div>
        <div className='flex lg:flex-row flex-col space-y-1 lg:space-y-0 ml-5 lg:ml-0 lg:mt-10 mt-5 pb-5 lg:justify-between'>
            <div className='flex space-x-1 xl:ml-32 lg:ml-20'>      
                <CopyrightIcon />
                <h3 className='text-sm tracking-wider'>Ankasa. All Rights Reserved</h3>
            </div>
            <div className='flex space-x-1 xl:me-56 lg:me-10'>
                <PlaceIcon/>
                <h3 className='text-sm tracking-wider'>Jakarta, Indonesia</h3>
            </div>
        </div>
    </div>
  )
}

export default Footer