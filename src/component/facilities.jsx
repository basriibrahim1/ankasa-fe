import { Checkbox, FormControlLabel } from '@mui/material';
import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Facilities = () => {

    const FacilitiesOption = [
        { label: "Luggage", checked: false },
        { label: "In-flight Meal", checked: false },
        { label: "Wi-fi", checked: false }
      ];
    
      const [facilitiesVisible, setFacilitiesVisible] = useState(false);
      const [facilitiesOptionState, setFacilitiesOptionsState] = useState(FacilitiesOption);
    
      const handleFacilitiesClick = () => {
        setFacilitiesVisible(!facilitiesVisible);
      }
    
      const handleFacilitiesOptionClick = (index) => {
        const updatedFacilitiesOptions = facilitiesOptionState.map((option, i) => {
          if (i === index) {
            return { ...option, checked: true };
          }
          return { ...option, checked: false };
        });
        setFacilitiesOptionsState(updatedFacilitiesOptions);
      } 

  return (
    <>
        <div className='border-b-2 mt-5'>
                        <div className='flex justify-between'>
                            <div className='font-semibold text-lg'>Facilities</div>
                            <div onClick={handleFacilitiesClick}>
                                {facilitiesVisible ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                            </div>
                        </div>
                            {facilitiesVisible && (
                                <div className='flex flex-col mt-3'>
                                    {facilitiesOptionState.map((option, index) => (
                                    <FormControlLabel
                                        key={index}
                                        label={option.label}
                                        control={
                                        <Checkbox
                                            checked={option.checked}
                                            onClick={() => handleFacilitiesOptionClick(index)}/>}
                                        labelPlacement="start"
                                        className="flex row-reverse justify-between text-start ml-2"/>))}
                                </div>
                                )}
                       
                    </div>
    </>
  )
}

export default Facilities