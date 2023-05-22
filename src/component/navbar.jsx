import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ankasa from '../assets/ankasa.png';
import { Search } from '@mui/icons-material';
import { useCookies } from 'react-cookie';

export const UserNavbar = (props) => {
  const { value, setValue } = props;
  const [cookies, setCookies] = useCookies()
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex ml-10 justify-around items-center mt-5'>
      <div className='flex'>
        <Image
          src={ankasa}
          height={50}
          width={50}
          style={{ transform: 'rotate(10deg)', objectFit: 'contain' }}
          alt='ankasa'
        />
        <h3 className='ml-4 text-3xl font-bold tracking-wide' style={{ color: '#414141' }}>
          Ankasa
        </h3>
      </div>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
        <Search sx={{ color: 'action.active', mr: 2, my: 0.5 }} />
        <TextField
          className='w-96'
          id='input-with-sx'
          label='Search destination'
          variant='standard'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Box>

      {/* Desktop Menu */}
      <div className='hidden md:flex space-x-10 font-semibold text-lg'>
        <Link href='/home/main' passHref>
          <Button component='a' color='primary' underline='hover'>
            Find Ticket
          </Button>
        </Link>
        <Link href='/user/mypass' passHref>
          <Button component='a' color='primary' underline='hover'>
            My Booking
          </Button>
        </Link>
      </div>

      {/* Mobile Menu */}
      {/* <div className='invisible'>
        {!isOpen ? (
          <MenuIcon onClick={toggleMenu} style={{ cursor: 'pointer' }} />
        ) : (
          <CloseIcon onClick={toggleMenu} style={{ cursor: 'pointer' }} />
        )}
      </div> */}

      {/* User Actions */}
      {cookies.token ? (
        <div className='space-x-10 text-lg flex items-center'>
          <MailOutlineIcon />
          <NotificationsNoneIcon />
          <Image
            src={cookies.photo}
            width={70}
            height={70}
            alt='user'
            className='rounded-full border-2 p-2'
            style={{ objectFit: 'contain' }}
          />
        </div>
      ) : (
        <div className='space-x-10'>
          <Button
            variant='contained'
            onClick={() => router.push('/auth/register')}
            className='text-white'
            style={{ backgroundColor: '#2395FF' }}
          >
            Sign Up
          </Button>
          <Button
            variant='contained'
            onClick={() => router.push('/auth/login')}
            className='text-white'
            style={{ backgroundColor: '#2395FF' }}
          >
            Sign In
          </Button>
        </div>
      )}

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className='md:hidden space-y-4'>
          <Link href='/home/main' passHref>
            <Button component='a' fullWidth color='primary' variant='contained' size='large'>
              Find Ticket
            </Button>
          </Link>
          <Link href='/user/mypass' passHref>
            <Button component='a' fullWidth color='primary' variant='contained' size='large'>
              My Booking
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};
