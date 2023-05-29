import { UserNavbar } from '@/component/navbar'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import plane from '../../../assets/plane.png'
import Footer from '@/component/footer'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Typography } from '@mui/material'
import generateBarcode from '../../../../lib/generateBarcode'
import { useRouter } from 'next/router'
import axios from 'axios'
import Layout from '@/component/layout'

const DetailPass = () => {
    const router = useRouter()
    const {id} = router.query
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState()
    console.log(data)


    useEffect(() => {
        if(!data && id){ 
            axios.get(`${process.env.REACT_APP_BASE_URL}/booking/${id}`)
            .then(res => {
                setData(res.data.data[0])
                
                setIsLoading(false)
        })
    }
    },[id])

    useEffect(() => {
        if (data) {
          generateBarcode('barcodeCanvas', `${data.id}`);
        }
      }, [data]);

  return (
    <Layout>

    {isLoading ? <div>Loading...</div> : 
        <div className='w-full md:p-20 p-2 mt-10 items-center justify-center' style={{backgroundColor:'#2395FF'}}>
            <div className='flex flex-col xl:p-20 p-2 py-10 rounded-xl' style={{backgroundColor:'white'}}>
                <div className='flex items-center xl:justify-between justify-around'>
                    <h3 className='text-3xl font-bold'>Booking Pass</h3>
                    <MoreVertIcon color='info' className='text-3xl'/>
                </div>


                <div className='flex xl:flex-row flex-col items-center xl:items-start'> 
                    <div className='md:w-4/6 w-full border-2 mt-10 md:p-14 rounded-xl' style={{borderColor:'#E5E5E5'}}>
                        <div className='flex xl:flex-row xl:space-y-0 space-y-5 flex-col items-center mt-2 xl:space-x-24'>
                            <Image src={data.photo_ticket_owner} width={100} height={100} alt='lion' style={{objectFit:'contain'}}/>
                            <h3 className='font-bold text-2xl'>{data.from}</h3>
                            <Image src={plane} alt='plane' className='w-5 items-center'/>
                            <h3 className='font-bold text-2xl'>{data.to}</h3>
                        </div>
                        <div className='flex justify-between xl:w-3/5 ml-7 items-center mt-10 ' style={{color:'#6B6B6B'}}>
                            <div className='flex flex-col'>
                                <h3>Code</h3>
                                <p className='font-medium'>{data.code}</p>
                            </div>
                            <div className='flex flex-col'>
                                <h3>Class</h3>
                                <p className='font-medium'>{data.airlines_class}</p>
                            </div>
                        </div>
                        <div className='flex justify-between xl:w-3/5 ml-7 mt-10' style={{color:'#6B6B6B'}}>
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

                    <div className='hidden xl:flex xl:w-2/6 w-4/6 border-2 xl:mt-10 p-14 py-[150px] items-center justify-center rounded-xl'>
                        <canvas style={{ transform: 'rotate(270deg)', width: '200px',  objectFit:'contain'}} id='barcodeCanvas'></canvas>
                    </div>
                    <div className='flex xl:hidden xl:w-2/6 w-4/6 border-2 xl:mt-10 p-14 items-center justify-center rounded-xl'>
                        <canvas style={{width: '200px',  objectFit:'contain'}} id='barcodeCanvas'></canvas>
                    </div>

                </div>
            </div>
        </div>
       }

    </Layout>
  )
}

export default DetailPass