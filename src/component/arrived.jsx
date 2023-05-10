import { Checkbox, FormControlLabel } from '@mui/material';
import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Arrived = () => {

    const ArrivedOptions = [
        { label: "00:00 : 06.00", checked: false },
        { label: "06.00 : 12:00", checked: false },
        { label: "12:00 : 18.00", checked: false },
        { label: "18:00 : 24.00", checked: false }
      ];
    
      const [ArrivedVisible, setArrivedVisible] = useState(false);
      const [ArrivedOptionsState, setArrivedOptionsState] = useState(ArrivedOptions);
    
      const handleArrivedClick = () => {
        setArrivedVisible(!ArrivedVisible);
      }
    
      const handleArrivedOptionClick = (index) => {
        const updatedArrivedOptions = ArrivedOptionsState.map((option, i) => {
          if (i === index) {
            return { ...option, checked: true };
          }
          return { ...option, checked: false };
        });
        setArrivedOptionsState(updatedArrivedOptions);
      }

  return (
    <>
        <div className='border-b-2 mt-5'>
            <div className='flex justify-between'>
                <div className='font-semibold text-lg'>Arrived Time</div>
                    <div onClick={handleArrivedClick}>
                        {ArrivedVisible ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                     </div>
                </div>
                    {ArrivedVisible && (
                <div className='flex flex-col mt-3'>
                    {ArrivedOptionsState.map((option, index) => (
                        <FormControlLabel
                            key={index}
                            label={option.label}
                            control={
                            <Checkbox
                                checked={option.checked}
                                onClick={() => handleArrivedOptionClick(index)}/>}
                                labelPlacement="start"
                                className="flex row-reverse justify-between text-start ml-2"/>)
                    )}
                </div>
            )}       
        </div>
    </>
  )
}

export default Arrived