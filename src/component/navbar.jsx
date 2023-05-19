import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useCookies } from 'react-cookie'
import Image from 'next/image'
import ankasa from '../assets/ankasa.png'
import Box from '@mui/material/Box'
import Search from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import { useRouter } from 'next/router'
import { Link } from '@mui/material'


export const UserNavbar = (props) => {
  const {value, setValue} = props
  const [cookies, setCookies] = useCookies()
  const [isLoading, setIsLoading] = useState(false)
  const user = useSelector(state => state.login.data[0])
  const updated = useSelector(state => state.userUpdate.data)
  const router = useRouter()


  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className='flex ml-10 justify-evenly items-center mt-5'>
          <div className='flex'>
            <Image src={ankasa} height={50} width={50} style={{ transform: 'rotate(10deg)', objectFit: 'contain' }} alt='ankasa' />
            <h3 className='ml-4 text-3xl font-bold tracking-wide' style={{ color: '#414141' }}>
              Ankasa
            </h3>
          </div>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
            <Search sx={{ color: 'action.active', mr: 2, my: 0.5 }} />
            <TextField className='w-96' id='input-with-sx' label='Search destination' variant='standard' value={value} onChange={(e) => setValue(e.target.value)}/>
          </Box>
          {cookies.token && (
            <div className='flex space-x-10 font-semibold text-lg'>
                <Link href='/home/main' color='primary' underline='hover'>Find Ticket</Link>
                <Link href='/user/mypass' color='primary' underline='hover'>My Booking</Link>
            </div>
          )}

          {cookies.token ? (
            <div className='space-x-10 text-lg flex items-center'>
              <MailOutlineIcon />
              <NotificationsNoneIcon />
                <Image
                  src={user?.photo}
                  width={70}
                  height={70}
                  alt='user'
                  className='rounded-full border-2 p-2'
                  style={{ objectFit: 'contain' }}
                />
            </div>
          ) : (
            <div className='space-x-10'>
              <Button variant='contained' onClick={() => router.push('/auth/register')} className='text-white' style={{ backgroundColor: '#2395FF' }}>
                Sign Up
              </Button>
              <Button variant='contained' onClick={() => router.push('/auth/login')} className='text-white' style={{ backgroundColor: '#2395FF' }}>
                Sign In
              </Button>
            </div>
          )}
        </div>
      )}
    </>
  )
}

