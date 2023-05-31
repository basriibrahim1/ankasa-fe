'useClient'


import { Button } from "@mui/material"



export const ButtonInsert = ({text, onClick}) => {
 return (
   <div>
       <Button onClick={onClick} variant='contained' className='px-10 py-5 font-semibold text-lg' style={{backgroundColor:'#2395FF'}}>{text}</Button>
   </div>
 )
}