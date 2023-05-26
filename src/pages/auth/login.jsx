import {FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from "@mui/material"
import Image from "next/image"
import logo from '../../assets/logo.png'
import ankasa from '../../assets/ankasa.png'
import Button from "@mui/material/Button"
import { useState } from "react"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { useCookies } from 'react-cookie';
import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
import { loginAction } from "@/storage/action/login/login"


const Login = () => {

    const router = useRouter()
    const dispatch = useDispatch()

    const [cookies, setCookies] = useCookies(['user'])

    const handleLogin = (e) => {
        e.preventDefault()
        const data = {
            email: email,
            password: password
        }

        dispatch(loginAction(data, setCookies, router))
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
        <div className="w-full h-screen flex">
            <div className="md:w-4/5">
                <Image src={logo} style={{objectFit:'cover'}} className="h-full md:flex hidden" alt='logo'/>
            </div>
            <div className="flex flex-col md:w-2/5 md:mx-16 justify-center md:justify-start md:items-start items-center w-full mx-5">
                <div className="flex items-center mt-20 mr-28 md:mr-0">
                    <Image src={ankasa} height={50} width={50} style={{transform: 'rotate(10deg)', objectFit:'contain'}} alt='ankasa'/>
                    <h3 className="ml-4 text-3xl font-bold tracking-wide" style={{color:'#414141'}}>Ankasa</h3>
                </div>
                <h2 className="lg:mt-40 md:mr-0 mr-44 mt-10 text-4xl font-bold tracking-wider">Login</h2>
                <div className="flex flex-col mt-20 mb-20 space-y-5">
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
                        </InputAdornment>
                        }
                    />
                    </FormControl>
                    <Button onClick={handleLogin}  variant="contained" className="mt-20 font-semibold tracking-wider h-12 text-md" color="primary" style={{backgroundColor:'#2395FF'}}>Sign In</Button>
                    <p className="mt-5 opacity-90 tracking-wider text-sm">Did you forgot your password? <span className="text-yellow-600">Click here</span> </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login