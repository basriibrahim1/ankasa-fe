import { UserNavbar } from '@/component/navbar'
import React, { useEffect, useState } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router'
import axios from 'axios'

const myPass = () => {

    const dispatch = useDispatch()
    const [cookies, setCookies] = useCookies()
    const [isLoading, setIsLoading] = useState(false)
    const [isLoadingUser, setIsLoadingUser] = useState(false)
    const [bookingData, setBookingData] = useState([])
    const [user, setUser] = useState([])
    console.log(user)
    const router = useRouter()
    
    useEffect(() => {
        setIsLoading(true);
        axios.get(`${process.env.REACT_APP_BASE_URL}/booking/mybooking`, {
            headers: {
                "Authorization" : `Bearer ${cookies.token}`
            }
        })
            .then(res => {
                setBookingData(res.data.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        setIsLoadingUser(true);
        axios.get(`${process.env.REACT_APP_BASE_URL}/users/myuser`, {
            headers: {
                "Authorization" : `Bearer ${cookies.token}`
            }
        })
            .then(res => {
                setUser(res.data.data);
                setIsLoadingUser(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoadingUser(false);
            });
    }, []);
  

  return (
    <>
        <UserNavbar />

            <div className='p-20 mt-10 flex' style={{backgroundColor:'#F5F6FA'}}>
                {isLoadingUser ? <div>Loading...</div> : user.map((item) => ( 
                <div className='bg-white p-7 space-y-5 rounded-xl shadow-lg h-full mx-10' style={{width:'20%'}}>
                    <div className='flex flex-col justify-center items-center space-y-3'>
                        <Image src={item.photo} alt='user' width={100} height={100} className='p-2 border-2 rounded-full border-blue-500' style={{objectFit:'contain'}}/>
                        <Button variant="outlined" color='info' component="label" style={{ textTransform: "none"}}>
                           Select Photo
                            <input hidden accept="image/*" type="file" />
                        </Button>
                        <h3 className='text-xl font-bold'>{item.name}</h3>
                        <div className='flex flex-row items-center'>
                            <LocationOnIcon className='text-md'/>
                            <h3 className='text-sm ml-1' style={{color:'#979797'}}>{item.city}, {item.country}</h3>
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
                    ))}

                <div className=' w-4/6 '>
                    <div className='bg-white rounded-xl shadow-md p-7 space-y-3'>
                        <h3 className='tracking-widest text-blue-500 text-xl font-semibold'>MY BOOKING</h3>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-bold text-2xl tracking-wider'>My Booking</h3>
                            <h3 className='font-semibold text-lg text-blue-500'>Order History</h3>
                        </div>
                    </div>
                    {isLoading ? <div>Loading...</div> : bookingData.length <= 0 ? <div>Loading...</div> : bookingData.map((item) => (
                    <div className='bg-white rounded-xl shadow-lg p-7 space-y-3 mt-10' key={item.id}>
                        
                        <div className='border-b-2 space-y-3 pb-5'>
                            <div className='space-x-1 flex font-medium'>
                                <h3>{item.schedule}</h3>
                                <Typography>-</Typography>
                                <h3>{item.departure_time}</h3>
                            </div>
                            <div className='flex space-x-10 text-xl font-bold'>
                                <h3>{item.from}</h3>
                                <Image src={plane} alt='plane' className='w-5 items-center' style={{transform:'rotate(10deg)', objectFit:'contain'}}/>
                                <h3>{item.to}</h3>
                            </div>
                            <div className='flex' style={{color:'#979797'}}>
                                <h3>{item.user_ticket_owner}</h3>
                                <Typography>,</Typography>
                                <h3 className='ml-1'>{item.code}</h3>
                            </div>
                        </div>
                        

                        <div className='flex justify-between items-center pt-5'>
                            <div className='flex space-x-10 items-center'>
                                <h3 className='font-bold text-lg' style={{color:'#979797'}}>Status</h3>
                                <h3 className='bg-orange-500 text-white p-3 rounded-lg'>{item.status}</h3>
                            </div>
                            <div className='flex space-x-2 text-blue-500 items-center'>
                                <h3 className='font-semibold text-lg'>View Details</h3>
                                <KeyboardArrowDownIcon/>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>

        </div>
    
    <Footer/>
    </>
  )
}

export default myPass