import { UserNavbar } from '@/component/navbar'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import garuda from '../../../assets/garuda.png'
import plane from '../../../assets/plane.png'
import Footer from '@/component/footer'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Typography } from '@mui/material'
import generateBarcode from '../../../../lib/generateBarcode'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { BookingIdAction } from '@/storage/action/booking/bookingIdAction'

const DetailPass = () => {
    const router = useRouter()
    const {id} = router.query
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)

    const data = useSelector(state => state.bookingId.data[0])
    console.log(data)

    useEffect(() => {
        generateBarcode('barcodeCanvas', `${data.id}`)
    },[id])

    useEffect(() => {
        if(!data && id){ 
            setIsLoading(true);
            dispatch(BookingIdAction(id))
            .then(res => {
                setIsLoading(false)
        })
    }
    },[id])


  return (
    <>
        <UserNavbar />

    {isLoading ? <div>Loading...</div> : 
        <div className='p-40 mt-10 items-center justify-center' style={{backgroundColor:'#2395FF', height:'100vh'}}>
            <div className='w-full flex flex-col p-20 flex rounded-xl' style={{backgroundColor:'white'}}>
                <div className='flex items-center justify-between'>
                    <h3 className='text-3xl font-bold'>Booking Pass</h3>
                    <MoreVertIcon color='info' className='text-3xl'/>
                </div>


                <div className='flex'> 
                <div className='w-4/6 border-2 divide-r divide-dashed  mt-10 p-14 rounded-xl' style={{borderColor:'#E5E5E5'}}>
                    <div className='flex items-center mt-2 space-x-24'>
                        <Image src={data.photo_ticket_owner} width={100} height={100} alt='lion' style={{objectFit:'contain'}}/>
                        <h3 className='font-bold text-2xl'>{data.from}</h3>
                        <Image src={plane} alt='plane' className='w-5 items-center'/>
                        <h3 className='font-bold text-2xl'>{data.to}</h3>
                    </div>
                    <div className='flex justify-between w-3/5 ml-7 items-center mt-10 ' style={{color:'#6B6B6B'}}>
                        <div className='flex flex-col'>
                            <h3>Code</h3>
                            <p className='font-medium'>{data.code}</p>
                        </div>
                        <div className='flex flex-col'>
                            <h3>Class</h3>
                            <p className='font-medium'>{data.airlines_class}</p>
                        </div>
                    </div>
                    <div className='flex justify-between w-3/5 ml-7 mt-10' style={{color:'#6B6B6B'}}>
                        <div className='flex flex-col '>
                            <h3>Terminal</h3>
                            <p className='font-medium'>{data.terminal}</p>
                        </div>
                        <div className='flex flex-col mr-8 '>
                            <h3>Gate</h3>
                            <p className='font-medium'>{data.gate}</p>
                        </div>
                    </div>
                    <div className='ml-7 mt-10' style={{color:'#6B6B6B'}}>
                        <h3>Departure</h3>
                        <div className='flex mt-3 font-medium space-x-2'>
                            <p>{data.schedule}</p>
                            <Typography>-</Typography>
                            <p>{data.departure_time}</p>
                        </div>
                    </div>

                </div>
                <div className='w-2/6 border-2 mt-10 p-14 rounded-xl'>
                    <canvas className='mt-24 ml-16 space-y-10' style={{ transform: 'rotate(270deg)', width: '200px',  objectFit:'contain'}} id='barcodeCanvas'></canvas>

                </div>
                </div>
                </div>
            </div>
       }
    <Footer/>
    </>
  )
}

export default DetailPass