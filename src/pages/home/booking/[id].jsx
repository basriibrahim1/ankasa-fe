import { UserNavbar } from '@/component/navbar'
import { Alert, Box, Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, Switch, TextField, Typography, makeStyles } from '@mui/material'
import { MuiTelInput } from 'mui-tel-input'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import plane from '../../../assets/plane.png'
import garuda from '../../../assets/garuda.png'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Footer from '@/component/footer';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { BookingInsertAction } from '@/storage/action/booking/bookingInsertAction';
import { BookingIdAction } from '@/storage/action/booking/bookingIdAction';
import Layout from '@/component/layout';


const Booking = () => {
    const router = useRouter()
    const {id} = router.query
    const [cookies, setCookies] = useCookies()
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [fullname, setFullname] = useState('')
    const [nationality, setNationality] = useState("");
    const [insuranceChecked, setInsuranceChecked] = useState(false);
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [total, setTotal] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        if(!data && id){ 
            setIsLoading(true);
            axios.get(`${process.env.REACT_APP_BASE_URL}/ticket/${id}`)
            .then(res => {
                setData(res.data.data)
                setIsLoading(false)
        })
    }
    },[id])

    
    useEffect(() => {
        if (data && insuranceChecked) {
          const price = parseInt(data[0].price);
          setTotal(price + 2);
        } else if (data) {
          const price = parseInt(data[0].price);
          setTotal(price);
        }
      }, [data, insuranceChecked]);
    

    const handleInsuranceChange = (event) => {
        setInsuranceChecked(event.target.checked);
    };

    const handleNationalityChange = (event) => {
        setNationality(event.target.value);
    };

    const handleChange = (newValue) => {
        setPhone(newValue)
    }

    const [checked, setChecked] = useState(false);

    const handleCheck = (event) => {
        setChecked(event.target.checked);
    };

    

    const insertBooking = async () => {
        let data = {
            ticket_id : parseInt(id),
            fullname: fullname,
            email: email,
            phone: phone,
            nationality: nationality,
            insurance: insuranceChecked,
            total: total.toString()
        }
        const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/booking`,data, {
            headers: {
                "Authorization" : `Bearer ${cookies.token}`
            }
        })
        const getId = await result.data.id
        router.push(`/home/payment/${getId}`)
    }

       

  return (
    <Layout>

    <div className='p-10 mt-5 flex lg:flex-row flex-col' style={{backgroundColor:'#F5F6FA'}}>
        <div className='lg:hidden flex flex-col mr-5'>
            <h3 className='text-2xl font-semibold'>Flight Details</h3>
            {isLoading ? <div>Loading...</div> : data && data.map(item => (
            <div className='flex flex-col bg-white mt-5 rounded-lg shadow-md'>
                <div className='space-y-5 border-b-2 p-7'>
                    <div className='flex items-center mt-2'>
                        <Image src={item.photo} alt='lion' width={100} height={100} style={{objectFit:'contain'}}/>
                        <h3 className='ml-5 tracking-wide text-lg font-medium' style={{color:'#595959'}}>{item.name}</h3>
                    </div>
                    <div className='flex space-x-10'>
                            <h3 className='font-semibold text-xl'>{item.from_country}</h3>
                            <Image src={plane} alt='plane' className='w-5 items-center'/>
                            <h3 className='font-semibold text-xl'>{item.to_country}</h3>
                    </div>
                    <div className='flex items-center space-x-5 text-sm' style={{color:'#6B6B6B'}}>
                        <p>{item.schedule_time}</p>
                        <Typography>-</Typography>             
                        <p>{item.departure_time} - {item.time_arrived}</p>
                    </div>
                    <div className='space-y-3'>
                        <div className='flex items-center space-x-2' style={{color:'#2395FF'}}>
                            <CheckCircleOutlineIcon/>
                            <p>Refundable</p>
                        </div>
                        <div className='flex items-center space-x-2' style={{color:'#2395FF'}}>
                            <CheckCircleOutlineIcon/>
                            <p>Can Reschedule</p>
                        </div>
                    </div>
                </div>
                <div className='flex p-7 justify-between font-bold text-lg'>
                    <h3 className=''>Total Payment</h3>
                    <div className='flex items-center' style={{color:'#2395FF'}}>
                        <h3>{insuranceChecked ? parseInt(item.price) + 2 : item.price},00</h3>
                        <KeyboardArrowDownIcon />
                    </div>
                </div>
            </div>
        ))}
        </div>

        <div className='flex flex-col lg:w-4/6 xxl:ml-40 mr-5 lg:mt-0 mt-10'>
            <div>
                <div>
                    <h3 className='text-2xl font-semibold'>Contact Person Details</h3>
                </div>
                <div className='flex flex-col space-y-10 bg-white p-10 mt-5 rounded-lg shadow-md'>
                    <TextField
                        required
                        label="Full Name"
                        variant="standard"
                        onChange={(e) => setFullname(e.target.value)}
                        value={fullname}
                        color='info'
                        type='text'
                        focused
                        inputLabelProps={{
                        style: {color:'#9B96AB'}
                        }}
                    
                    />
                    <TextField
                        required
                        label="Email"
                        variant="standard"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        color='primary'
                        type='email'
                        focused
                        inputLabelProps={{
                            style: {color:'#9B96AB'}
                        }}
                    />
                    <MuiTelInput required label="Phone Number" value={phone} onChange={handleChange} variant='standard' color='primary' focused/>
                    <Alert severity="warning" className='tracking-wide p-5'>Warning! Please Make sure that all data is correct!</Alert>
                </div>
            </div>
            <div className='mt-10'>
                <h3 className='text-2xl font-semibold'>Passenger Details</h3>
            </div>
            <div className='flex flex-col space-y-10 bg-white p-10 mt-5 rounded-lg shadow-md'>
                <div className='bg-blue-100 flex lg:flex-row flex-col lg:items-center rounded-lg p-3 justify-between '>
                    <h3 className='font-medium text-sm' style={{color:'#595959'}}>Passenger 1 Adult</h3>
                    <div className='flex space-x-2 items-center text-sm'>
                        <h3 className='font-medium text-sm' style={{color:'#595959'}}>Same as contact person</h3>
                        <Switch
                            checked={checked}
                            onChange={handleCheck}
                        />
                    </div>   
                </div>
                
                {checked ?
                <Box sx={{display:'flex', flexDirection:'column'}}>
                    <TextField
                        disabled
                        label={fullname ? fullname : 'Full name'}
                        variant="standard"
                        color="primary"
                        type='text'
                        inputLabelProps={{
                            style: { color: "#9B96AB" },
                        }}
                        inputProps={{
                            style: { cursor: "not-allowed" },
                        }}
                    /> 

                    <TextField
                        className='mt-10'
                        disabled
                        label={email ? email : 'Email'}
                        variant="standard"
                        color="primary"
                        type='text'
                        inputLabelProps={{
                            style: { color: "#9B96AB" },
                        }}
                        inputProps={{
                            style: { cursor: "not-allowed" },
                        }}
                    />
                </Box>
                :
                <div className='flex flex-col space-y-5'>
                    <TextField
                        required
                        label="Full name"
                        variant="standard"
                        color="primary"
                        type='text'
                        focused
                        inputLabelProps={{
                            style: {color:'#9B96AB'}}} 
                    />
                    <TextField
                        className='mt-20'
                        required
                        label="Email"
                        variant="standard"
                        color="primary"
                        type='text'
                        focused
                        inputLabelProps={{
                            style: {color:'#9B96AB'}}} 
                    />
                    </div>
                }

                <FormControl variant='standard' className='pb-3' color='primary' sx={{my:3}}>
                    <InputLabel id="nationality-label">Nationality</InputLabel>
                    <Select
                        labelId="nationality-label"
                        id="nationality-select"
                        value={nationality}
                        onChange={handleNationalityChange}
                        inputLabelProps={{
                            style: {color:'#9B96AB'}
                        }}>
                        <MenuItem value="">None</MenuItem>
                        <MenuItem value="Indonesian">Indonesian</MenuItem>
                        <MenuItem value="American">American</MenuItem>
                        <MenuItem value="Japanese">Japanese</MenuItem>
                        <MenuItem value="Korean">Korean</MenuItem>
                    </Select>
                </FormControl>
            </div>

                <div className='flex flex-col space-y-10 bg-white p-10 mt-10 rounded-lg shadow-md'>
                    <div className='flex items-center justify-between border-b-2 pb-2'>
                        <FormControlLabel color='primary' control={<Checkbox checked={insuranceChecked} onChange={handleInsuranceChange}/>} label='Travel Insurance'  style={{fontWeight:'900'}}/>
                        <p style={{color:'#979797'}}><span className='text-blue-500'>$2,00</span>/pax</p>
                    </div>
                    <p className='font-semibold tracking-wide'>Get travel compensation up to $ 10.000,00</p>
                </div>


                <div className='my-10 justify-center flex'>
                    <Button color='primary' onClick={() => insertBooking()} className='px-10 py-3 font-semibold text-lg' variant='contained' style={{ textTransform: "none", backgroundColor:'#2395FF'}}>Proceed to Payment</Button>
                </div>
        </div>


        <div className='lg:flex hidden w-2/6 flex-col xl:ml-20 ml-10 xxl:mr-40'>
            <h3 className='text-2xl font-semibold'>Flight Details</h3>
            {isLoading ? <div>Loading...</div> : data && data.map(item => (
            <div className='flex flex-col bg-white mt-5 rounded-lg shadow-md'>
                <div className='space-y-5 border-b-2 p-7'>
                    <div className='flex items-center mt-2'>
                        <Image src={item.photo} alt='lion' width={100} height={100} style={{objectFit:'contain'}}/>
                        <h3 className='ml-5 tracking-wide text-lg font-medium' style={{color:'#595959'}}>{item.name}</h3>
                    </div>
                    <div className='flex space-x-10'>
                            <h3 className='font-semibold text-xl'>{item.from_country}</h3>
                            <Image src={plane} alt='plane' className='w-5 items-center'/>
                            <h3 className='font-semibold text-xl'>{item.to_country}</h3>
                    </div>
                    <div className='flex items-center space-x-5 text-sm' style={{color:'#6B6B6B'}}>
                        <p>{item.schedule_time}</p>
                        <Typography>-</Typography>             
                        <p>{item.departure_time} - {item.time_arrived}</p>
                    </div>
                    <div className='space-y-3'>
                        <div className='flex items-center space-x-2' style={{color:'#2395FF'}}>
                            <CheckCircleOutlineIcon/>
                            <p>Refundable</p>
                        </div>
                        <div className='flex items-center space-x-2' style={{color:'#2395FF'}}>
                            <CheckCircleOutlineIcon/>
                            <p>Can Reschedule</p>
                        </div>
                    </div>
                </div>
                <div className='flex p-7 justify-between font-bold text-lg'>
                    <h3 className=''>Total Payment</h3>
                    <div className='flex items-center' style={{color:'#2395FF'}}>
                        <h3>{insuranceChecked ? parseInt(item.price) + 2 : item.price},00</h3>
                        <KeyboardArrowDownIcon />
                    </div>
                </div>
            </div>
        ))}
        </div>
    </div>



    </Layout>
  )
}

export default Booking