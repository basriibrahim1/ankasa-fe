import React from 'react'
import { Search } from '@mui/icons-material'
import { Box, Button, TextField } from '@mui/material'
import Image from 'next/image'
import ankasa from '../assets/ankasa.png'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonIcon from '@mui/icons-material/Person';

export const RawNavbar = () => {
  return (
    <div className='flex justify-evenly items-center mt-5'>
        <div className="flex items-center">
            <Image src={ankasa} height={50} width={50} style={{transform: 'rotate(10deg)', objectFit:'contain'}} alt='ankasa'/>
                <h3 className="ml-4 text-3xl font-bold tracking-wide" style={{color:'#414141'}}>Ankasa</h3>
            </div>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom:2}}>
                    <Search sx={{ color: 'action.active', mr: 2, my: 0.5 }} />
                    <TextField className='w-96' id="input-with-sx" label="Search destination" variant="standard" />
            </Box>
            <div className='flex space-x-10 font-semibold text-lg'>
                <h3>Find Ticket</h3>
                <h3>My Booking</h3>
            </div>
        <Button variant="contained" className='text-white' style={{backgroundColor:'#2395FF'}}>Sign Up</Button>
    </div>
  )
}

export const UserNavbar = () => {
    return (
      <div className='flex ml-10 justify-evenly items-center mt-5'>
            <div className="flex">
                <Image src={ankasa} height={50} width={50} style={{transform: 'rotate(10deg)', objectFit:'contain'}} alt='ankasa'/>
                <h3 className="ml-4 text-3xl font-bold tracking-wide" style={{color:'#414141'}}>Ankasa</h3>
            </div>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom:2}}>
                <Search sx={{ color: 'action.active', mr: 2, my: 0.5 }} />
                <TextField className='w-96' id="input-with-sx" label="Search destination" variant="standard" />
            </Box>
            <div className='flex space-x-10 font-semibold text-lg'>
                <h3>Find Ticket</h3>
                <h3>My Booking</h3>
            </div>
            <div className='space-x-10 text-lg flex'>
                <MailOutlineIcon/>
                <NotificationsNoneIcon />
                <PersonIcon/>
            </div>
      </div>
    )
  }

