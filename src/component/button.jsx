import { Button } from "@mui/material"
import { useRouter } from "next/router"

export const ButtonId = ({id, href, text}) => {
    
   const router = useRouter()
    const handleClick = () => {
        router.push(`${href}/${id}`)
    }


  return (
    <div>
        <Button onClick={handleClick} variant='contained' className='font-semibold rounded-lg tracking-wide' style={{backgroundColor:'#2395FF'}}>{text}</Button>
    </div>
  )
}