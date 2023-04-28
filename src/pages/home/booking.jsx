import { UserNavbar } from '@/component/navbar'
import { Alert, Box, Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, Switch, TextField, Typography, makeStyles } from '@mui/material'
import { MuiTelInput } from 'mui-tel-input'
import React, { useState } from 'react'
import Image from 'next/image';
import plane from '../../assets/plane.png'
import garuda from '../../assets/garuda.png'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Footer from '@/component/footer';


const Booking = () => {

    const [value, setValue] = useState('')
    const [nationality, setNationality] = useState("");

    const handleNationalityChange = (event) => {
        setNationality(event.target.value);
    };

    const handleChange = (newValue) => {
        setValue(newValue)
    }

    const [checked, setChecked] = useState(false);

    const handleCheck = (event) => {
        setChecked(event.target.checked);
    };

  return (
    <>
    <UserNavbar />

    <div className='p-10 mt-5 flex' style={{backgroundColor:'#F5F6FA'}}>
        <div className='flex flex-col w-4/6 ml-40 mr-5'>
            <div>
                <div>
                    <h3 className='text-2xl font-semibold'>Contact Person Details</h3>
                </div>
                <div className='flex flex-col space-y-10 bg-white p-10 mt-5 rounded-lg shadow-md'>
                    <TextField
                        required
                        label="Full Name"
                        variant="standard"
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
                        color='primary'
                        type='email'
                        focused
                        inputLabelProps={{
                            style: {color:'#9B96AB'}
                        }}
                    />
                    <MuiTelInput required label="Phone Number" value={value} onChange={handleChange} variant='standard' color='primary' focused/>
                    <Alert severity="warning" className='tracking-wide p-5'>Warning! Please Make sure that all data is correct!</Alert>
                </div>
            </div>
            <div className='mt-10'>
                <h3 className='text-2xl font-semibold'>Passenger Details</h3>
            </div>
            <div className='flex flex-col space-y-10 bg-white p-10 mt-5 rounded-lg shadow-md'>
                <div className='bg-blue-100 flex items-center rounded-lg p-3 justify-between '>
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
                    label="Title"
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
                    className='mt-5'
                    disabled
                    label="Full Name"
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
                    <Box sx={{display:'flex', flexDirection:'column'}}>
                        <TextField
                        required
                        label="Title"
                        variant="standard"
                        color="primary"
                        type='text'
                        focused
                        inputLabelProps={{
                            style: {color:'#9B96AB'}
                        }} />
                        <TextField
                        className='mt-5'
                        required
                        label="Full Name"
                        variant="standard"
                        color="primary"
                        type='text'
                        focused
                        inputLabelProps={{
                            style: {color:'#9B96AB'}
                        }} />
                    </Box>
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
                        }}
                    >
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
                        <FormControlLabel color='primary' control={<Checkbox/>} label='Travel Insurance'  style={{fontWeight:'900'}}/>
                        <p style={{color:'#979797'}}><span className='text-blue-500'>$2,00</span>/pax</p>
                    </div>
                    <p className='font-semibold tracking-wide'>Get travel compensation up to $ 10.000,00</p>
                </div>


                <div className='my-10 justify-center flex'>
                    <Button color='primary' className='px-10 py-3 font-semibold text-lg' variant='contained' style={{ textTransform: "none", backgroundColor:'#2395FF'}}>Proceed to Payment</Button>
                </div>
        </div>


        <div className='w-2/6 ml-20 mr-40'>
            <h3 className='text-2xl font-semibold'>Flight Details</h3>
            <div className='flex flex-col bg-white mt-5 rounded-lg shadow-md'>
                <div className='space-y-5 border-b-2 p-7'>
                    <div className='flex items-center mt-2'>
                        <Image src={garuda} alt='lion' className='w-24 h-12' style={{objectFit:'contain'}}/>
                        <h3 className='ml-5 tracking-wide text-lg font-medium' style={{color:'#595959'}}>Garuda Indonesia</h3>
                    </div>
                    <div className='flex space-x-10'>
                            <h3 className='font-semibold text-xl'>Medan (IDN)</h3>
                            <Image src={plane} alt='plane' className='w-5 items-center'/>
                            <h3 className='font-semibold text-xl'>Tokyo (JPN)</h3>
                    </div>
                    <div className='flex items-center space-x-5 text-sm' style={{color:'#6B6B6B'}}>
                        <p>Sunday, 15 August 2020</p>
                        <Typography>-</Typography>             
                        <p>12.33 - 15.21</p>
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
                        <h3>$ 145,00</h3>
                        <KeyboardArrowDownIcon />
                    </div>
                </div>

            </div>
        </div>
    </div>


    <Footer />
    </>
  )
}

export default Booking