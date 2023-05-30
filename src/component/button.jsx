'useClient'


import { Button } from "@mui/material"
import { useRouter } from "next/router"

export const ButtonId = ({id, href, text}) => {
    
   const router = useRouter()
    const handleClick = () => {
        router.push(`${href}/${id}`)
    }
  return (
    <div>
        <Button onClick={handleClick} variant='contained' className='px-10 py-5 font-semibold text-lg' style={{backgroundColor:'#2395FF'}}>{text}</Button>
    </div>
  )
}


export const ButtonInsert = ({text, onClick}) => {
 return (
   <div>
       <Button onClick={onClick} variant='contained' className='px-10 py-5 font-semibold text-lg' style={{backgroundColor:'#2395FF'}}>{text}</Button>
   </div>
 )
}