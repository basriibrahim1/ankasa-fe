import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';

export function ProfileMenu() {
  const [cookies, setCookies, removeCookie] = useCookies(['user'])
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const router = useRouter()

  const logout = () => {
    cookies &&
    removeCookie("id")
    removeCookie("token")
    removeCookie("photo")
    router.push("/login");
  };

  return (
    <div>
        <Button
            id="demo-positioned-button"
            aria-controls="demo-positioned-menu"
            aria-haspopup="true"
            onClick={handleClick}
        >
            <img
                src={cookies.photo}
                width={70}
                height={70}
                alt='user'
                className='rounded-full border-2 p-2'
                style={{ objectFit: 'contain' }}
            />
        </Button>  
      <Menu
        className='mt-20'
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={() => router.push('/user')}>Profile</MenuItem>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}