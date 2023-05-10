import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Airplane = () => {
    
      const [AirlinesVisible, setAirlinesVisible] = useState(false)
      const [airplane, setAirplane] = useState('')

      const handleAirPlaneCheck = (e) => {
        const isChecked = e.target.value
        isChecked ? setAirplane(isChecked) : setAirplane('')
      }

      const handleAirlinesClick = () => {
        setAirlinesVisible(!AirlinesVisible);
      }

  return (
    <>
        <div className='border-b-2 mt-5'>
            <div className='flex justify-between'>
                <div className='font-semibold text-lg'>Airlines</div>
                    <div onClick={handleAirlinesClick}>
                        {AirlinesVisible ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                    </div>
            </div>
            {AirlinesVisible && (
                <div className='flex flex-col mt-3'>
                  <FormGroup>
                      <FormControlLabel control={<Checkbox 
                        labelPlacement="start"
                        value='garuda'
                        onChange={handleAirPlaneCheck}
                        className="flex row-reverse justify-between text-start ml-2" />} label="Garuda Indonesia" />
                      <FormControlLabel control={<Checkbox
                       labelPlacement="start"
                        value='asia'
                        onChange={handleAirPlaneCheck}
                       className="flex row-reverse justify-between text-start ml-2" />} label="Air Asia" />
                      <FormControlLabel control={<Checkbox 
                       labelPlacement="start"
                        value='lion'
                        onChange={handleAirPlaneCheck}
                       className="flex row-reverse justify-between text-start ml-2"/>} label="Lion Air" />
                    </FormGroup>
                </div>
            )}              
        </div>
    
    </>
  )
}

export default Airplane