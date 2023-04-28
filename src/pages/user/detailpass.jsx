import { UserNavbar } from '@/component/navbar'
import React, { useEffect } from 'react'
import Image from 'next/image'
import garuda from '../../assets/garuda.png'
import plane from '../../assets/plane.png'
import Footer from '@/component/footer'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Typography } from '@mui/material'
import generateBarcode from '../../../lib/generateBarcode'

const DetailPass = () => {


    useEffect(() => {
        generateBarcode('barcodeCanvas', '1234 5678 90AS 6543 21CV')
    },[])


  return (
    <>
        <UserNavbar />


        <div className='p-40 mt-10 items-center justify-center' style={{backgroundColor:'#2395FF', height:'100vh'}}>
            <div className='w-full flex flex-col p-20 flex rounded-xl' style={{backgroundColor:'white'}}>
                <div className='flex items-center justify-between'>
                    <h3 className='text-3xl font-bold'>Booking Pass</h3>
                    <MoreVertIcon color='info' className='text-3xl'/>
                </div>


                <div className='flex'> 
                <div className='w-4/6 border-2 divide-r divide-dashed  mt-10 p-14 rounded-xl' style={{borderColor:'#E5E5E5'}}>
                    <div className='flex items-center mt-2 space-x-24'>
                        <Image src={garuda} alt='lion' className='w-30 h-20' style={{objectFit:'contain'}}/>
                        <h3 className='font-bold text-2xl'>Medan (IDN)</h3>
                        <Image src={plane} alt='plane' className='w-5 items-center'/>
                        <h3 className='font-bold text-2xl'>Tokyo (JPN)</h3>
                    </div>
                    <div className='flex justify-between w-3/5 ml-7 items-center mt-10 ' style={{color:'#6B6B6B'}}>
                        <div className='flex flex-col'>
                            <h3>Code</h3>
                            <p className='font-medium'>AB-221</p>
                        </div>
                        <div className='flex flex-col'>
                            <h3>Class</h3>
                            <p className='font-medium'>Economy</p>
                        </div>
                    </div>
                    <div className='flex justify-between w-3/5 ml-7 mt-10' style={{color:'#6B6B6B'}}>
                        <div className='flex flex-col '>
                            <h3>Terminal</h3>
                            <p className='font-medium'>A</p>
                        </div>
                        <div className='flex flex-col mr-8 '>
                            <h3>Gate</h3>
                            <p className='font-medium'>221</p>
                        </div>
                    </div>
                    <div className='ml-7 mt-10' style={{color:'#6B6B6B'}}>
                        <h3>Departure</h3>
                        <div className='flex mt-3 font-medium space-x-2'>
                            <p>Monday, 20 July 2020</p>
                            <Typography>-</Typography>
                            <p>12.33</p>
                        </div>
                    </div>

                </div>
                <div className='w-2/6 border-2 mt-10 p-14 rounded-xl'>
                    <canvas className='mt-40 space-y-10' style={{ transform: 'rotate(270deg)', width: '450px',  objectFit:'cover'}} id='barcodeCanvas'></canvas>

                </div>
                </div>
                </div>
            </div>
       
    <Footer/>
    </>
  )
}

export default DetailPass