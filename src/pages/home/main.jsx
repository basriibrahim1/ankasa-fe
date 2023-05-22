import React, { useEffect, useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box, Button, Checkbox, FormControlLabel, Pagination, Slider, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import plane from '../../assets/plane.png'
import LuggageIcon from '@mui/icons-material/Luggage';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import WifiIcon from '@mui/icons-material/Wifi';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { TicketIdAction } from '@/storage/action/ticket/ticketIdAction';
import axios from 'axios';
import TicketPrice from '@/component/ticketPrice';
import Airplane from '@/component/airplane';
import Arrived from '@/component/arrived';
import Departure from '@/component/departure';
import Facilities from '@/component/facilities';
import Transit from '@/component/transit';
import PaginationComponent from '@/component/pagination';
import Layout from '@/component/layout';




export const getServerSideProps = async () => {
    try {
        const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/ticket`)
        const data = result.data.data
        console.log(data)
        return { props: {data}}
    } catch (error) {
        return { props: {error}}
    }
}


const Main = ({data, error}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [page, setPage] = useState(1);

    const itemsPerPage = 2;

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePageChange = (event, value) => {
        setPage(value);
    };
    
    const dispatch = useDispatch()
    const router = useRouter()

    const handleDetail = (id) => {
        dispatch(TicketIdAction(id))
        .then(res => {
            router.push(`/home/booking/${id}`)
        })
        .catch(err => console.log(err))
    }


  return (
    isLoading ? <div>Loading..</div> : 
   <Layout>
        <main className='mt-10 p-10 flex' style={{backgroundColor:'#F5F6FA'}}>
            <div className='w-1/6 ml-40'>
                <div className='flex justify-between'>
                    <h3 className='text-2xl font-semibold'>Filter</h3>
                    <h3 className='text-md font-semibold text-blue-700 mt-1'>Reset</h3>
                </div>
                <div className=' mt-5 shadow-md bg-white p-8 space-y-5 rounded-lg'>
                    <Transit />
                    <Facilities />
                    <Departure />
                    <Arrived />
                    <Airplane />
                    <TicketPrice />
                </div>
            </div>



            <div className='w-4/6 mx-20 h-screen'>
                    <div className='flex justify-between'>
                    <div className='flex items-center'>
                        <h3 className='text-2xl font-semibold'>Select Ticket</h3>
                        <h3 className='text-md ml-3 text-zinc-400 opacity-80 tracking-wide'>( {data.length} flight found )</h3>
                    </div>
                    <h3 className='text-md font-semibold text-blue-700 mt-1'>Sort by</h3>
                </div>

            {isLoading ? <div>Loading...</div> : data.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((item, index) => { 
                    const depHours = parseInt(item.departure_time.split('.')[0]);
                    const depMinutes = parseInt(item.departure_time.split('.')[1]);
                    const arrHours = parseInt(item.time_arrived.split('.')[0]);
                    const arrMinutes = parseInt(item.time_arrived.split('.')[1]);
                    
                    let hours = arrHours - depHours;
                    let minutes = arrMinutes - depMinutes;
                    
                    if (minutes < 0) {
                        hours--;
                        minutes += 60;
                    }
                    
                    const duration = `${hours} Hour ${minutes} Minutes`;
                
                return(
                <div className='bg-white shadow-sm p-2 mt-7 rounded-lg' key={index}>
                    <div className='flex items-center ml-7 mt-2'>
                        <Image src={item.photo} priority={true} alt='lion' width={100} height={100} style={{objectFit:'contain'}}/>
                        <h3 className='ml-5 tracking-wide text-lg font-medium' style={{color:'#595959'}}>{item.name}</h3>
                    </div>
                    <div className='flex justify-between mx-7 mt-7 items-center'>
                        <div className='flex space-x-10 w-5/12'>
                            <div className='text-center'>
                                <h3 className='font-semibold text-3xl'>{item.from_country}</h3>
                                <p className='tracking-wide text-sm' style={{color:'#595959'}}>{item.departure_time}</p>
                            </div>
                            <div className='items-center justify-center mt-3'>
                            <Image src={plane} alt='plane' className='w-5 h-5 items-center'/>
                            </div>
                            <div className='text-center'>
                                <h3 className='font-semibold text-3xl'>{item.to_country}</h3>
                                <p className='tracking-wide text-sm' style={{color:'#595959'}}>{item.time_arrived}</p>
                            </div>
                        </div>
                        <div className='text-center'>
                            <p className='font-semibold' style={{color:'#595959'}}>{duration}</p>
                            <p className='tracking-wide text-sm' style={{color:'#595959'}}>
                                {item.transit && (item.transit == 0 ? '( Direct )' : item.transit == 1 ? '( 1 Transit )' : '( Transit 2+ )')}
                            </p>
                        </div>
                        {item.facilities && 
                            <div className='space-x-3' style={{color:'#595959'}}>
                                {item.facilities.split(',').map((facility) => {
                                if (facility == 'luggage') {
                                    return <LuggageIcon />;
                                } else if (facility == 'meal') {
                                    return <LunchDiningIcon />;
                                } else if (facility == 'wifi') {
                                    return <WifiIcon />;
                                }
                                })}
                            </div>
                            }
                        <div>
                            <p> <span className='text-blue-500'>${item.price},00</span>/pax</p>
                        </div>
                        <div>
                            <Button onClick={() => handleDetail(item.id)} variant='contained' className='font-semibold rounded-lg tracking-wide' style={{backgroundColor:'#2395FF'}}>Select</Button>
                        </div>
                    </div>
                    <div className='flex flex items-center mt-5 ml-7 pb-2 text-blue-500 font-semibold'>
                        <h3>View Details</h3>
                        <ArrowDropDownIcon />
                    </div>
                </div>
            
                    )})}
                <div className='mt-10 justify-center items-center flex'>
                    <PaginationComponent items={totalPages} page={page} handlePageChange={handlePageChange}/>
                </div>
            </div>
        </main>
        
    </Layout>
  )
}

export default Main