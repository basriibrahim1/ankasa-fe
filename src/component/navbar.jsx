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
                <ListItemText primary='Find Ticket' />
                </ListItemButton>
            </ListItem>
        <ListItem className=' mx-5' disablePadding>
            <ListItemButton>
            <ListItemText primary='My Booking' />
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
                <ListItemText primary='Login' />
            </ListItemButton>
        </ListItem>
            <ListItem className='my-4 mx-10' disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <PersonAddIcon />
                </ListItemIcon>
                <ListItemText primary='Sign Up' />
            </ListItemButton>
        </ListItem>
      </List>
      }
    </Box>
  );

  return (
    <div className='flex ml-10 md:justify-around justify-between items-center mt-5'>
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

      {/* User Actions */}
      {cookies.token ? (
        <div className='space-x-10 hidden md:flex text-lg items-center'>
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
        <div className='space-x-10 hidden md:flex'>
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
