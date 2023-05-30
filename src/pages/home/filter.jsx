'use client'

import { Checkbox, FormControlLabel, FormGroup, Box, Slider, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export function Filter() {
    const [filterVisible, setFilterVisible] = useState(false);
    
    const handleFilterClick = () => {
      setFilterVisible(!filterVisible);
    }

  return (
    <>
        <div className=''>
            <div className='flex lg:justify-between items-center'>
                <h3 className='text-2xl font-semibold' onClick={() => handleFilterClick()}>Filter</h3>
                <h3 className='text-md lg:flex hidden font-semibold text-blue-700 mt-1'>Reset</h3>
            </div>
                <div className='md:hidden'>
                    {!filterVisible ? (
                        <ArrowDropDownIcon onClick={() => handleFilterClick()} className='flex ml-2' />
                    ) : (
                        <ArrowDropUpIcon onClick={() => handleFilterClick()} className='flex ml-2' />
                    )}
                </div>

                <div className='mt-5 lg:flex flex-col hidden shadow-md bg-white p-8 space-y-5 rounded-lg'>
                <Transit />
                <Facilities />
                <Departure />
                <Arrived />
                <Airplane />
                <TicketPrice />
                </div>

                {filterVisible &&
                    <div className='mt-5 md:hidden flex flex-col shadow-md bg-white p-8 space-y-5 rounded-lg'>
                        <Transit />
                        <Facilities />
                        <Departure />
                        <Arrived />
                        <Airplane />
                        <TicketPrice />
                    </div>
                }
        </div>            
    </>
  )
}



export const Transit = () => {
    
      const [transitVisible, setTransitVisible] = useState(false);
      const [transitState, setTransitState] = useState();
    
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
                    <div className='flex flex-col justify-between mt-3'>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox 
                                labelPlacement="end"
                                value={0}
                                className="flex justify-between text-start ml-2" />} label="Direct" />
                            <FormControlLabel control={<Checkbox
                                labelPlacement="start"
                                value={1}                                
                                className="flex row-reverse justify-between text-start ml-2" />} label="Transit" />
                            <FormControlLabel control={<Checkbox 
                                labelPlacement="start"
                                value={2}                               
                              className="flex row-reverse justify-between text-start ml-2"/>} label="Direct 2+" />
                        </FormGroup>
                    </div>
                )}
        </div>
    </>
  )
}

export const TicketPrice = () => {
    const [PriceVisible, setPriceVisible] = useState(false);

      const handlePriceClick = () => {
        setPriceVisible(!PriceVisible);
      }


      const [minNum, setMinNum] = useState(0);
      const [maxNum, setMaxNum] = useState(1000);
      const minmin = 0;
      const maxmax = 1000;
      const [priceRangeValue, setPriceRangeValue] = useState([0, 1000]);
    
      const handlePriceRangeChange = (event, newValue) => {
        setMinNum(newValue[0]);
        setMaxNum(newValue[1]);
        setPriceRangeValue(newValue);
      };

  return (
    <>
        <div>
            <div className='flex justify-between'>
                <div className='font-semibold text-lg'>Ticket Price</div>
                    <div onClick={handlePriceClick}>
                        {PriceVisible ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                    </div>
            </div>
            {PriceVisible && (
                <div className='w-full'>
                    <div className='flex justify-between mx-2 mt-4 '>
                        <h3>Lowest</h3>
                        <h3>Highest</h3>
                                </div>
            <Slider
                getAriaLabel={() => "Price range"}
                value={priceRangeValue}
                onChange={handlePriceRangeChange}
                valueLabelDisplay="auto"
                min={minmin}
                max={maxmax}/>
            <Stack direction="row" justifyContent="space-evenly" alignItems="center">
                <Box sx={{ display: 'flex', alignItems: 'flex-end', alignItems:'center'}}>
                    <AttachMoneyIcon sx={{ color: 'action.active'}}  />
                        <TextField  label="min"
                            type="number"
                            variant="outlined"
                            InputLabelProps={{ shrink: true }}
                            value={minNum}
                            onChange={(e) => {
                                setMinNum(Number(e.target.value));
                                setPriceRangeValue([Number(e.target.value), priceRangeValue[1]]);
                            }}/>
                </Box>
                <Typography className='mx-3 text-lg'>-</Typography>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', alignItems:'center'}}>
                    <AttachMoneyIcon sx={{ color: 'action.active'}}  />
                        <TextField  label="max"
                            type="number"
                            variant="outlined"
                            InputLabelProps={{ shrink: true }}
                            value={maxNum}
                            onChange={(e) => {
                                setMaxNum(Number(e.target.value));
                                setPriceRangeValue([priceRangeValue[0], Number(e.target.value)]);
                            }}/>
                </Box>
            </Stack>
            </div>
            )}
        </div>
    </>
  )
}


export const Facilities = () => {
      const [facilitiesVisible, setFacilitiesVisible] = useState(false);
      const [facilitiesOptionState, setFacilitiesOptionsState] = useState();
    
      const handleFacilitiesClick = () => {
        setFacilitiesVisible(!facilitiesVisible);
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
                    <FormGroup>
                        <FormControlLabel control={<Checkbox 
                            labelPlacement="start"
                            value={0}
                            className="flex justify-between text-start ml-2" />} label="Luggage" />
                        <FormControlLabel control={<Checkbox
                            labelPlacement="start"
                            value={1}                                
                            className="flex row-reverse justify-between text-start ml-2" />} label="Wifi" />
                        <FormControlLabel control={<Checkbox 
                            labelPlacement="start"
                            value={2}                               
                            className="flex row-reverse justify-between text-start ml-2"/>} label="In Flight Meal" />
                        </FormGroup>
                </div>
            )}                    
        </div>
    </>
  )
}


export const Departure = () => {
    
    const [DepartureVisible, setDepartureVisible] = useState(false);
    const [DepartureOptionsState, setDepartureOptionsState] = useState();
  
    const handleDepartureClick = () => {
      setDepartureVisible(!DepartureVisible);
    }
  

return (
  <>
        <div className='border-b-2 mt-5'>
            <div className='flex justify-between'>
                <div className='font-semibold text-lg'>Departure Time</div>
                    <div onClick={handleDepartureClick}>{DepartureVisible ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</div>
                      </div>
                        {DepartureVisible && (
                            <div className='flex flex-col mt-3'>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox 
                                        labelPlacement="start"
                                        value={0}
                                        className="flex justify-between text-start ml-2" />} label="00:00 : 06.00" />
                                    <FormControlLabel control={<Checkbox
                                        labelPlacement="start"
                                        value={1}                                
                                        className="flex row-reverse justify-between text-start ml-2" />} label="06.00 : 12:00" />
                                    <FormControlLabel control={<Checkbox 
                                        labelPlacement="start"
                                        value={2}                               
                                        className="flex row-reverse justify-between text-start ml-2"/>} label="12:00 : 18.00" />
                                    <FormControlLabel control={<Checkbox 
                                        labelPlacement="start"
                                        value={2}                               
                                        className="flex row-reverse justify-between text-start ml-2"/>} label="18:00 : 24.00" />
                                </FormGroup>
                            </div>
                        )}    
        </div>
  </>
)
}

export const Arrived = () => {
    
    const [ArrivedVisible, setArrivedVisible] = useState(false);
    const [ArrivedOptionsState, setArrivedOptionsState] = useState();
  
    const handleArrivedClick = () => {
      setArrivedVisible(!ArrivedVisible);
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
              <FormGroup>
                  <FormControlLabel control={<Checkbox 
                      labelPlacement="start"
                      value={0}
                      className="flex justify-between text-start ml-2" />} label="00:00 : 06.00" />
                  <FormControlLabel control={<Checkbox
                      labelPlacement="start"
                      value={1}                                
                      className="flex row-reverse justify-between text-start ml-2" />} label="06.00 : 12:00" />
                  <FormControlLabel control={<Checkbox 
                      labelPlacement="start"
                      value={2}                               
                      className="flex row-reverse justify-between text-start ml-2"/>} label="12:00 : 18.00" />
                  <FormControlLabel control={<Checkbox 
                      labelPlacement="start"
                      value={2}                               
                      className="flex row-reverse justify-between text-start ml-2"/>} label="18:00 : 24.00" />
              </FormGroup>
          </div>
          )}       
      </div>
  </>
)
}

export const Airplane = () => {
    
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