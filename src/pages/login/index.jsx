import Image from "next/image"
import logo from '../../assets/logo.png'
import ankasa from '../../assets/ankasa.png'
import { LoginComponent } from "../../component/LoginComponent"



const LoginPage = () => {
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
                <div className="my-20 w-full">
                    <LoginComponent />
                    <p className="mt-5 opacity-90 tracking-wider text-sm">Did you forgot your password? <span className="text-yellow-600">Click here</span> </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default LoginPage