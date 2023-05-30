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
import { useCookies } from 'react-cookie';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LockIcon from '@mui/icons-material/Lock';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useRouter } from 'next/router';
import { Search } from '@mui/icons-material';
import { ProfileMenu } from './Menu';

export const UserNavbar = (props) => {
  const { value, setValue } = props;
  const router = useRouter()
  const [cookies, setCookies] = useCookies()
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const list = () => (
    <Box sx={{ width: 250, transition: 'all 1s' }} role='presentation' onClick={toggleMenu} onKeyDown={toggleMenu}>
      {cookies.token ?
      <List>
        <ListItem className='my-4 ml-10' disablePadding>
            <Image
            src={ankasa}
            height={50}
            width={50}
            style={{ transform: 'rotate(10deg)', objectFit: 'contain' }}
            alt='ankasa'
            />
             <h3 className='ml-4 text-3xl font-bold tracking-wide' style={{ color: '#414141' }}>Ankasa</h3>
        </ListItem>
        <ListItem className=' mx-5' disablePadding>
            <ListItemButton>
                <ListItemText primary='Find Ticket' onClick={() => router.push('/home')} />
                </ListItemButton>
            </ListItem>
        <ListItem className=' mx-5' disablePadding>
            <ListItemButton>
            <ListItemText primary='My Booking' onClick={() => router.push('/userpass')}/>
            </ListItemButton>
        </ListItem>
        <ListItem className=' mx-5' disablePadding>
            <ListItemButton>
            <ListItemText primary='Edit Profile' onClick={() => router.push('/profile')}/>
            </ListItemButton>
        </ListItem>
      </List>
       :
      <List>
        <ListItem className='my-4 mx-10' disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <LockIcon />
                </ListItemIcon>
                <ListItemText primary='Login' onClick={() => router.push('/login')} />
            </ListItemButton>
        </ListItem>
            <ListItem className='my-4 mx-10' disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <PersonAddIcon />
                </ListItemIcon>
                <ListItemText primary='Sign Up' onClick={() => router.push('/register')} />
            </ListItemButton>
        </ListItem>
      </List>
      }
    </Box>
  );

  return (
    <div className='flex ml-10 md:justify-around justify-between items-center mt-5'>
      <div className='flex' onClick={() => router.push('/home')}>
        <Image
          src={ankasa}
          height={50}
          className='hover:cursor-pointer'
          width={50}
          style={{ transform: 'rotate(10deg)', objectFit: 'contain' }}
          alt='ankasa'
        />
        <h3 className='ml-4 text-3xl font-bold tracking-wide hover:cursor-pointer' style={{ color: '#414141' }}>
          Ankasa
        </h3>
      </div>

      <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
            <Search sx={{ color: 'action.active', mr: 2, my: 0.5 }} />
            <TextField className='lg:w-96 w-36' id='input-with-sx' label='Search destination' variant='standard' value={value} onChange={(e) => setValue(e.target.value)}/>
          </Box>

      {/* Desktop Menu */}
      {cookies.token && 
      <div className='hidden md:flex space-x-10 font-semibold text-lg'>
        <Link href='/home'>
          <Button component='a' color='primary' underline='hover'>
            Find Ticket
          </Button>
        </Link>
        <Link href='/userpass'>
          <Button component='a' color='primary' underline='hover'>
            My Booking
          </Button>
        </Link>
      </div>
      }

      {/* User Actions */}
      {cookies.token ? (
        <div className='space-x-10 hidden md:flex text-lg items-center'>
          <MailOutlineIcon />
          <NotificationsNoneIcon />
          <ProfileMenu />
        </div>
      ) : (
        <div className='space-x-10 hidden md:flex'>
          <Button
            variant='contained'
            onClick={() => router.push('/register')}
            className='text-white'
            style={{ backgroundColor: '#2395FF' }}
          >
            Sign Up
          </Button>
          <Button
            variant='contained'
            onClick={() => router.push('/login')}
            className='text-white'
            style={{ backgroundColor: '#2395FF' }}
          >
            Sign In
          </Button>
        </div>
      )}


       {/* Hamburger Menu */}
       <div className='md:hidden'>
        {!isOpen ? (
          <MenuIcon className='me-5' onClick={toggleMenu} style={{ cursor: 'pointer' }} />
        ) : (
          <CloseIcon className='me-5' onClick={toggleMenu} style={{ cursor: 'pointer' }} />
        )}
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
       <Drawer
       anchor='left'
       open={isOpen}
       onClose={toggleMenu}
       transitionDuration={300}
     >
       {list()}
     </Drawer>
      )}
    </div>
  );
};
