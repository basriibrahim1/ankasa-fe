import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Transit = () => {
    
      const [transitVisible, setTransitVisible] = useState(false);
      const [transitState, setTransitState] = useState();

      console.log(transitState)
    
      const handleTransitClick = () => {
        setTransitVisible(!transitVisible);
      }
    
  return (
    <>
        <div className='border-b-2'>
                        <div className='flex justify-between'>
                            <div className='font-semibold text-lg'>Transit</div>
                            <div onClick={handleTransitClick}>
                                {transitVisible ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                            </div>
                        </div>
                        {transitVisible && (
                        <div className='flex flex-col mt-3'>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox 
                                labelPlacement="start"
                                value={0}
                                onChange={(e) => e.target.checked ? setTransitState(0) : setTransitState()}
                                className="flex justify-between text-start ml-2" />} label="Direct" />
                              <FormControlLabel control={<Checkbox
                                labelPlacement="start"
                                value={1}
                                onChange={(e) => {e.target.checked ? setTransitState(1) : setTransitState()}}
                              className="flex row-reverse justify-between text-start ml-2" />} label="Transit" />
                              <FormControlLabel control={<Checkbox 
                                labelPlacement="start"
                                value={2}
                                onChange={(e) => {e.target.checked ? setTransitState(2) : setTransitState()}}
                              className="flex row-reverse justify-between text-start ml-2"/>} label="Direct 2+" />
                            </FormGroup>
                        </div>
                        )}
                    </div>
    </>
  )
}

export default Transit