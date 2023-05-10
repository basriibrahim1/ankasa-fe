import { UserNavbar } from '@/component/navbar'
import React, { useEffect, useState } from 'react'
import user from '../../assets/foto.png'
import Image from 'next/image'
import plane from '../../assets/plane.png'
import { Button, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Footer from '@/component/footer'
import { useDispatch, useSelector } from 'react-redux'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router'
import axios from 'axios'
import Link from 'next/link'
import PaginationComponent from '@/component/pagination'
import UserComponent from '@/component/userComponent'
import { BookingIdAction } from '@/storage/action/booking/bookingIdAction'

const myPass = () => {

    const dispatch = useDispatch()
    const [cookies, setCookies] = useCookies()
    const [isLoading, setIsLoading] = useState(false)
    const [bookingData, setBookingData] = useState([])
   
    const router = useRouter()


    const [page, setPage] = useState(1);

    const itemsPerPage = 3;

    const totalPages = Math.ceil(bookingData.length / itemsPerPage);

    const handlePageChange = (event, value) => {
        setPage(value);
    };
    
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

    const handleId = (id) => {
        dispatch(BookingIdAction(id))
    }

    const handleIdSuccess = (id) => {
        dispatch(BookingIdAction(id))
    }
  

  return (
      <>
        <UserNavbar />
        {cookies.token ? 
            <div className='p-20 mt-10 flex' style={{backgroundColor:'#F5F6FA'}}>
                <UserComponent profileColor={{color:'#979797', padding:10, backgroundColor:'white'}}/>

                <div className=' w-4/6 '>
                    <div className='bg-white rounded-xl shadow-md p-7 space-y-3'>
                        <h3 className='tracking-widest text-blue-500 text-xl font-semibold'>MY BOOKING</h3>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-bold text-2xl tracking-wider'>My Booking</h3>
                            <h3 className='font-semibold text-lg text-blue-500'>Order History</h3>
                        </div>
                    </div>
                    {isLoading ? <div>Loading...</div> : bookingData.length <= 0 ? <div>Loading...</div> : bookingData.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((item) => (
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
                                {item.status == 'Waiting for payment' ? <Link onClick={handleId(item.id)} href={`/home/payment/${item.id}`} className='bg-orange-500 text-white p-3 rounded-lg'>{item.status}</Link>
                                : 
                                <Link onClick={handleIdSuccess(item.id)} href={`/user/detailpass/${item.id}`} className='bg-yellow-300 text-white p-3 rounded-lg'>{item.status}</Link>
                            }
                                
                                
                            </div>
                            <div className='flex space-x-2 text-blue-500 items-center'>
                                <h3 className='font-semibold text-lg'>View Details</h3>
                                <KeyboardArrowDownIcon/>
                            </div>
                        </div>
                    </div>
                    ))}
                    <div className='mt-10 flex justify-center items-center'>
                        <PaginationComponent items={totalPages} page={page} handlePageChange={handlePageChange}/>
                    </div>
                </div>

        </div>
        : <Link href={"/auth/login"}>Login</Link>}
    <Footer/>
    </>
  )
}

export default myPass