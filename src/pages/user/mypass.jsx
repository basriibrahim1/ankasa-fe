import { UserNavbar } from '@/component/navbar'
import React from 'react'
import user from '../../assets/foto.png'
import Image from 'next/image'
import plane from '../../assets/plane.png'
import { Button, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StarIcon from '@mui/icons-material/Star';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Footer from '@/component/footer'

const myPass = () => {


  return (
    <>
        <UserNavbar />

        <div className='p-20 mt-10 flex' style={{backgroundColor:'#F5F6FA'}}>
           
                <div className='bg-white w-1/6 p-7 space-y-5 rounded-xl shadow-lg mx-10'>
                    <div className='flex flex-col justify-center items-center space-y-3'>
                        <Image src={user} alt='user' className='w-28 p-2 h-28 border-2 rounded-full border-blue-500' style={{objectFit:'contain'}}/>
                        <Button variant="outlined" color='info' component="label" style={{ textTransform: "none"}}>
                           Select Photo
                            <input hidden accept="image/*" type="file" />
                        </Button>
                        <h3 className='text-xl font-bold'>Mike Kowalski</h3>
                        <div className='flex flex-row items-center'>
                            <LocationOnIcon className='text-md'/>
                            <h3 className='text-sm ml-1' style={{color:'#979797'}}>Medan, Indonesia</h3>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <h3 className='text-md font-semibold'>Cards</h3>
                        <p className='text-blue-600 font-semibold'>+ Add</p>
                    </div>
                    <div className='bg-blue-500 p-4 rounded-lg text-white space-y-1 shadow-xl'>
                        <p className='font-semibold'>4441 1235 5512 5551</p>
                        <div className='flex justify-between text-sm'>
                            <p>X Card</p>
                            <p>$ 1,440.2</p>
                        </div>
                    </div>
                    <div className='space-y-5 font-semibold' style={{color:'#979797'}}>
                        <div className='flex justify-between'>
                            <div className='space-x-5 flex'>
                                <AccountCircleIcon/>
                                <h3>Profile</h3>
                            </div>
                            <ArrowForwardIosIcon />
                        </div>
                        <div className='flex justify-between'>
                            <div className='space-x-5 flex'>
                                <StarIcon/>
                                <h3>My Review</h3>
                            </div>                          
                            <ArrowForwardIosIcon />
                        </div>
                        <div className='flex justify-between'>
                            <div className='space-x-5 flex'>
                                <SettingsIcon/>
                                <h3>Settings</h3>
                            </div>
                            <ArrowForwardIosIcon />
                        </div>
                        <div className='flex justify-between'>
                            <div className='space-x-5 flex'>
                            <LogoutIcon/>
                            <h3>Logout</h3>
                            </div>
                            <ArrowForwardIosIcon />
                        </div>
                    </div>
                </div>
           
                <div className=' w-5/6 '>
                    <div className='bg-white rounded-xl shadow-lg p-7 space-y-3'>
                        <h3 className='tracking-widest text-blue-500 text-xl font-semibold'>MY BOOKING</h3>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-bold text-2xl tracking-wider'>My Booking</h3>
                            <h3 className='font-semibold text-lg text-blue-500'>Order History</h3>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-lg p-7 space-y-3 mt-10'>
                        <div className='border-b-2 space-y-3 pb-5'>
                            <div className='space-x-1 flex font-medium'>
                                <h3>Monday, 20 July 2020</h3>
                                <Typography>-</Typography>
                                <h3>12.33</h3>
                            </div>
                            <div className='flex space-x-10 text-xl font-bold'>
                                <h3>IDN</h3>
                                <Image src={plane} alt='plane' className='w-5 items-center' style={{transform:'rotate(10deg)', objectFit:'contain'}}/>
                                <h3>JPN</h3>
                            </div>
                            <div className='flex' style={{color:'#979797'}}>
                                <h3>Garuda Indonesia</h3>
                                <Typography>,</Typography>
                                <h3 className='ml-1'>AB-221</h3>
                            </div>
                        </div>
                        

                        <div className='flex justify-between items-center pt-5'>
                            <div className='flex space-x-10 items-center'>
                                <h3 className='font-bold text-lg' style={{color:'#979797'}}>Status</h3>
                                <h3 className='bg-orange-500 text-white p-3 rounded-lg'>Waiting for payment</h3>
                            </div>
                            <div className='flex space-x-2 text-blue-500 items-center'>
                                <h3 className='font-semibold text-lg'>View Details</h3>
                                <KeyboardArrowDownIcon/>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-lg p-7 space-y-3 mt-10'>
                        <div className='border-b-2 space-y-3 pb-5'>
                            <div className='space-x-1 flex font-medium'>
                                <h3>Monday, 20 July 2020</h3>
                                <Typography>-</Typography>
                                <h3>12.33</h3>
                            </div>
                            <div className='flex space-x-10 text-xl font-bold'>
                                <h3>IDN</h3>
                                <Image src={plane} alt='plane' className='w-5 items-center' style={{transform:'rotate(10deg)', objectFit:'contain'}}/>
                                <h3>JPN</h3>
                            </div>
                            <div className='flex' style={{color:'#979797'}}>
                                <h3>Garuda Indonesia</h3>
                                <Typography>,</Typography>
                                <h3 className='ml-1'>AB-221</h3>
                            </div>
                        </div>
                        

                        <div className='flex justify-between items-center pt-5'>
                            <div className='flex space-x-10 items-center'>
                                <h3 className='font-bold text-lg' style={{color:'#979797'}}>Status</h3>
                                <h3 className='bg-lime-500 text-white p-3 rounded-lg'>Eticket issued</h3>
                            </div>
                            <div className='flex space-x-2 text-blue-500 items-center'>
                                <h3 className='font-semibold text-lg'>View Details</h3>
                                <KeyboardArrowDownIcon/>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    
    <Footer/>
    </>
  )
}

export default myPass