import { Box, Slider, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const TicketPrice = () => {
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

export default TicketPrice