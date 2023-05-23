import Footer from '@/component/footer'
import Layout from '@/component/layout'
import { UserNavbar } from '@/component/navbar'
import UserComponent from '@/component/userComponent'
import { userPayloadAction } from '@/storage/action/user/userPayloadAction'
import { userPhotoAction } from '@/storage/action/user/userPhotoAction'
import { userUpdateAction } from '@/storage/action/user/userUpdateAction'
import { Button, Input, TextField } from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useDispatch } from 'react-redux'

const Profile = () => {
    const router = useRouter();
    const dispatch = useDispatch()
    const [cookies, setCookies] = useCookies();
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({});

    const [updateData, setUpdateData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        country: '',
        postal_code: '',
    });

    const [updatePhoto, setUpdatePhoto] = useState()
    const [photoPreview, setPhotoPreview] = useState('')

    const handlePhoto = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
        setPhotoPreview(reader.result);
        }
        reader.readAsDataURL(file);
        setUpdatePhoto(e.target.files[0])
    }

    const handleUpdateData = (key) => (e) => {
        setUpdateData((prevState) => ({
          ...prevState,
          [key]: e.target.value,
        }));
      };


    const submitForm = async () => {
        const editForm =  new FormData()
        editForm.append('name', updateData.name)
        editForm.append('email', updateData.email)
        editForm.append('address', updateData.address)
        editForm.append('city', updateData.city)
        editForm.append('country', updateData.country)
        editForm.append('postal_code', updateData.postal_code)
        editForm.append('photo', updatePhoto)

        dispatch(userUpdateAction(editForm, cookies.token))
    }

    useEffect(() => {
        {!data}{
            setIsLoading(true);
            axios
            .get(`${process.env.REACT_APP_BASE_URL}/users/myuser`, {
                headers: {
                Authorization: `Bearer ${cookies.token}`,
                },
            })
            .then((res) => {
                setData(res.data.data[0]);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false);
            });
        }
       
    }, []);

    useEffect(() => {
        setUpdateData({
        name: data.name || '',
        email: data.email || '',
        address: data.address || '',
        city: data.city || '',
        country: data.country || '',
        postal_code: data.postal_code || '',
        });
    }, [data]);


  return (
    <Layout>
       
            {cookies.token ? isLoading ? <div>Loading...</div> :
            <div className='p-20 mt-10 flex justify-around' style={{backgroundColor:'#F5F6FA'}}>
                <UserComponent profileColor={{ color: 'white', padding: 10, backgroundColor: 'cadetblue' }} photoPreview={photoPreview} handlePhoto={handlePhoto}/>

                <div className=' w-4/6 '>
                    <div className='bg-white rounded-xl shadow-md p-7 space-y-3'>
                        <h3 className='tracking-widest text-blue-500 text-xl font-semibold'>Profile</h3>
                    </div>
                    <div className='bg-white rounded-xl shadow-lg p-7 space-y-3 mt-10'>
                        <div className='border-b-2 space-y-10 pb-14 flex flex-col'>
                        <TextField label='Name' placeholder='Name' value={updateData.name || ''} onChange={handleUpdateData('name')} />
                        <TextField label='Email' placeholder='Email' value={updateData.email || ''} onChange={handleUpdateData('email')} />
                        <TextField label='Address' placeholder='Address' value={updateData.address || ''} onChange={handleUpdateData('address')} />
                        <div className='justify-between flex'>
                            <TextField label='City' placeholder='City' value={updateData.city || ''} onChange={handleUpdateData('city')} />
                            <TextField label='Country' placeholder='Country' value={updateData.country || ''} onChange={handleUpdateData('country')} />
                            <TextField label='Postal Code' placeholder='Postal Code' value={updateData.postal_code || ''} onChange={handleUpdateData('postal_code')} />
                        </div>
                        </div>
                        <div className='flex justify-end pt-5'>                          
                            <Button onClick={() => submitForm()} color='info' variant='contained'>Simpan</Button>
                        </div>
                    </div>
                </div>

        </div>
            : router.push('auth/login') }
    </Layout>
  )
}

export default Profile