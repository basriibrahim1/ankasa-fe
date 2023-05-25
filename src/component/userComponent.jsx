import React, { useEffect, useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StarIcon from '@mui/icons-material/Star';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import axios from 'axios'
import { useCookies } from 'react-cookie';
import { Button, Link } from '@mui/material';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const UserComponent = (props) => {
    const {profileColor, handlePhoto, photoPreview} = props
    const [cookies, setCookies, removeCookie] = useCookies()
    const [isLoadingUser, setIsLoadingUser] = useState(false)
    const [user, setUser] = useState([])
    const updated = useSelector(state => state.userUpdate.data)
    const router = useRouter()

    useEffect(() => {
        {!user
        setIsLoadingUser(true);
        axios.get(`${process.env.REACT_APP_BASE_URL}/users/myuser`, {
            headers: {
                "Authorization" : `Bearer ${cookies.token}`
            }
        })
            .then(res => {
                setUser(res.data.data);
                setIsLoadingUser(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoadingUser(false);
            });
        }
    }, []);
    
    const logout = () => {
        cookies &&
        removeCookie("id")
        removeCookie("token")
        removeCookie("email")
        removeCookie("photo")
        removeCookie("name")
        router.push("/auth/login");
      };

  return (
    <>
        {!isLoadingUser && user.map((item) => ( 
                <div className='bg-white p-7 space-y-5 rounded-xl shadow-lg h-full mx-10' key={item.id}>
                    <div className='flex flex-col justify-center items-center space-y-3'>
                        <Image src={photoPreview ? photoPreview : item.photo} alt='user' width={100} height={100} className='p-2 border-2 rounded-full border-blue-500' style={{objectFit:'contain'}}/>
                        <Button variant="outlined" color='info' component="label" style={{ textTransform: "none"}}>
                           Select Photo
                            <input hidden accept="image/*" onChange={handlePhoto} type="file" />
                        </Button>
                        <h3 className='text-xl font-bold'>{updated?.name ? updated.name : item.name}</h3>
                        <div className='flex flex-row items-center'>
                        {item.country && item.city &&
                            <LocationOnIcon className='text-md'/>
                        }
                        <h3 className='text-sm ml-1' style={{color:'#979797'}}>{updated?.city ? updated.city : item.city}, {updated?.country ? updated.country : item.country}</h3>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <h3 className='text-md font-semibold'>Cards</h3>
                        <p className='text-blue-600 font-semibold'>+ Add</p>
                    </div>
                    <div className='bg-blue-500 p-4 rounded-lg text-white space-y-1 shadow-md'>
                        <p className='font-semibold'>4441 1235 5512 5552</p>
                        <div className='flex justify-between text-sm'>
                            <p>X Card</p>
                            <p>$ 1,440.2 </p>
                        </div>
                    </div>
                    <div className='space-y-5 font-semibold'>
                        <div className='flex justify-between' style={profileColor}>
                            <div className='space-x-5 flex' >
                                <AccountCircleIcon/>
                                <Link href='/user/profile' color='inherit' underline='none'>Profile</Link>
                            </div>
                            <ArrowForwardIosIcon />
                        </div>
                        <div className='flex justify-between' style={{color:'#979797', padding:10, backgroundColor:'white'}} >
                            <div className='space-x-5 flex'>
                                <StarIcon/>
                                <h3>My Review</h3>
                            </div>                          
                            <ArrowForwardIosIcon />
                        </div>
                        <div className='flex justify-between' style={{color:'#979797', padding:10, backgroundColor:'white'}}>
                            <div className='space-x-5 flex'>
                                <SettingsIcon/>
                                <h3>Settings</h3>
                            </div>
                            <ArrowForwardIosIcon />
                        </div>
                        <div className='flex justify-between' style={{color:'#979797', padding:10, backgroundColor:'white'}}>
                            <div className='space-x-5 flex'>
                            <LogoutIcon/>
                            <Link onClick={() => logout()}>Logout</Link>
                            </div>
                            <ArrowForwardIosIcon />
                        </div>
                    </div>
                </div>
        ))}
    </>
  )
}

export default UserComponent