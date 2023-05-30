import React from 'react'
import {FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from "@mui/material"
import Button from "@mui/material/Button"
import { useState } from "react"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { useCookies } from 'react-cookie';
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import { loginAction } from "@/storage/action/login/login"
import axios from 'axios'

export function LoginComponent () {

    const router = useRouter()
    const dispatch = useDispatch()
    const [error, isError] = useState(false)
    const [isLogin, setIsLogin] = useState(false)

    const [cookies, setCookies] = useCookies(['user'])

    const handleLogin = async(e) => {
        setIsLogin(true)
        e.preventDefault()
        const data = {
            email: email,
            password: password
        }
        try {
            const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`, data)
           
            router.push('/home')
            setCookies("token", result.data.data.token, {
                path:'/'
            })
                setCookies("id", result.data.data.id, {
                path:'/'
            })
            setCookies("photo", result.data.data.photo, {
                path:'/'
            })
        } catch (error) {
            isError(true)
        }
        isError(false)
        setIsLogin(false)
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

  return (
    <>
        <div className="flex flex-col w-full space-y-5">
            <TextField value={email} onChange={(e) => setEmail(e.target.value)} id="Email" label="Email. Use this: kania@gmail.com" variant="standard" type="email"/>
            <FormControl variant="standard" className="mt-5">
            <InputLabel htmlFor="password">Password. 123</InputLabel>
                <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                    >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>}
                    />
                    </FormControl>
            {error && <div>Wrong Email or password</div>}
            {isLogin ? <Button onClick={handleLogin}  variant="contained" className="mt-20 font-semibold tracking-wider h-12 text-md" color="primary" style={{backgroundColor:'#2395FF'}}>Loading...</Button> : <Button onClick={handleLogin}  variant="contained" className="mt-20 font-semibold tracking-wider h-12 text-md" color="primary" style={{backgroundColor:'#2395FF'}}>Sign In</Button> }
            
        </div>
    </>
  )
}
