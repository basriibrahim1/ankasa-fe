import {Alert, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from "@mui/material"
import Image from "next/image"
import logo from '../../assets/logo.png'
import ankasa from '../../assets/ankasa.png'
import Button from "@mui/material/Button"
import { CheckCircleOutlined, Visibility, VisibilityOff } from "@mui/icons-material"
import { useState } from "react"
// import Loading from "@/component/loading"


const Register = () => {

    const [isAlertVisible, setIsAlertVisible] = useState(false);

    const handleAlertClose = () => {
        setIsAlertVisible(false);
    };

    const handleButtonClick = () => {
        setIsAlertVisible(true);
    };

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };


  return (
    <>
        <div className="w-full h-screen flex">
            <div className="w-3/5 container">
                <Image src={logo} className="h-full" alt='logo'/>
            </div>
            <div className="flex flex-col w-2/5 mx-16">
                <div className="flex items-center mt-20">
                    <Image src={ankasa} height={50} width={50} style={{transform: 'rotate(10deg)', objectFit:'contain'}} alt='ankasa'/>
                    <h3 className="ml-4 text-3xl font-bold tracking-wide" style={{color:'#414141'}}>Ankasa</h3>
                </div>
                <h2 className="mt-40 text-4xl font-bold tracking-wider">Register</h2>
                <div className="flex flex-col mt-20">
                    <TextField id="Name" label="Username" variant="standard" type="text"/>
                    <TextField className="mt-5" id="Email" label="Email" variant="standard" type="email"/>
                    <FormControl variant="standard" className="mt-5">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
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
                    <Button
                        onClick={handleButtonClick}
                        variant="contained"
                        className="mt-10 font-semibold tracking-wider h-12 text-md"
                        color="primary"
                        style={{ backgroundColor: "#2395FF" }}
                    >
                        Register
                    </Button>
                    {isAlertVisible && (
                        <Alert
                        className="mt-3"
                        icon={<CheckCircleOutlined fontSize="inherit" />}
                        severity="success"
                        onClose={handleAlertClose}>
                        Register Success
                        </Alert>
                    )}
                    <p className="mt-5 opacity-90 tracking-wider text-sm">Did you forgot your password? <span className="text-yellow-600">Click here</span> </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register