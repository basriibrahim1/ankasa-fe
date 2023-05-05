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
import { userPayloadAction } from '@/storage/action/user/userPayloadAction'
import { useRouter } from 'next/router'

export const UserNavbar = () => {
  const dispatch = useDispatch()
  const [cookies, setCookies] = useCookies()
  const [isLoading, setIsLoading] = useState(false)
  const user = useSelector(state => state.userPayload)
  const userData = user.data[0]
  const router = useRouter()

  useEffect(() => {
    if (!userData && cookies.token) {
      setIsLoading(true)
      dispatch(userPayloadAction(cookies.token)).then(() => setIsLoading(false))
    }
  }, [])

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
            <TextField className='w-96' id='input-with-sx' label='Search destination' variant='standard' />
          </Box>
          {cookies.token && (
            <div className='flex space-x-10 font-semibold text-lg'>
              <h3>Find Ticket</h3>
              <div onClick={() => router.push('/user/mypass')}>
                <h3>My Booking</h3>
              </div>
            </div>
          )}

          {cookies.token ? (
            <div className='space-x-10 text-lg flex items-center'>
              <MailOutlineIcon />
              <NotificationsNoneIcon />
              {userData?.photo && (
                <Image
                  src={userData.photo}
                  width={70}
                  height={70}
                  alt='user'
                  className='rounded-full border-2 p-2'
                  style={{ objectFit: 'contain' }}
                />
              )}
            </div>
          ) : (
            <div className='space-x-10'>
              <Button variant='contained' className='text-white' style={{ backgroundColor: '#2395FF' }}>
                Sign Up
              </Button>
              <Button variant='contained' className='text-white' style={{ backgroundColor: '#2395FF' }}>
                Sign In
              </Button>
            </div>
          )}
        </div>
      )}
    </>
  )
}

