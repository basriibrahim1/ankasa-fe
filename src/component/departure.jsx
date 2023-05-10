import { Checkbox, FormControlLabel } from '@mui/material'
import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Departure = () => {

    const DepartureOptions = [
        { label: "00:00 : 06.00", checked: false },
        { label: "06.00 : 12:00", checked: false },
        { label: "12:00 : 18.00", checked: false },
        { label: "18:00 : 24.00", checked: false }
      ];
    
      const [DepartureVisible, setDepartureVisible] = useState(false);
      const [DepartureOptionsState, setDepartureOptionsState] = useState(DepartureOptions);
    
      const handleDepartureClick = () => {
        setDepartureVisible(!DepartureVisible);
      }
    
      const handleDepartureOptionClick = (index) => {
        const updatedDepartureOptions = DepartureOptionsState.map((option, i) => {
          if (i === index) {
            return { ...option, checked: true };
          }
          return { ...option, checked: false };
        });
        setDepartureOptionsState(updatedDepartureOptions);
      }


  return (
    <>
        <div className='border-b-2 mt-5'>
                        <div className='flex justify-between'>
                            <div className='font-semibold text-lg'>Departure Time</div>
                            <div onClick={handleDepartureClick}>
                                {DepartureVisible ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                            </div>
                        </div>
                            {DepartureVisible && (
                                <div className='flex flex-col mt-3'>
                                    {DepartureOptionsState.map((option, index) => (
                                    <FormControlLabel
                                        key={index}
                                        label={option.label}
                                        control={
                                        <Checkbox
                                            checked={option.checked}
                                            onClick={() => handleDepartureOptionClick(index)}
                                        />
                                        }
                                        labelPlacement="start"
                                        className="flex row-reverse justify-between text-start ml-2"/>))}
                                </div>
                                )}
                       
                    </div>
    </>
  )
}

export default Departure