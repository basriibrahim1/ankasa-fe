import { RawNavbar, UserNavbar } from '@/component/navbar'
import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Box, Button, Checkbox, FormControlLabel, Slider, Stack, TextField, Typography } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import garuda from '../../assets/garuda.png'
import asia from '../../assets/asia.png'
import lion from '../../assets/lion.png'
import Image from 'next/image';
import plane from '../../assets/plane.png'
import LuggageIcon from '@mui/icons-material/Luggage';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import WifiIcon from '@mui/icons-material/Wifi';
import { Search } from '@mui/icons-material'
import ankasa from '../../assets/ankasa.png'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonIcon from '@mui/icons-material/Person';
import google from '../../assets/google.png'
import apple from '../../assets/apple.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CopyrightIcon from '@mui/icons-material/Copyright';
import PlaceIcon from '@mui/icons-material/Place';


const Main = () => {
    const transitOptions = [
        { label: "Direct", checked: false },
        { label: "Transit", checked: false },
        { label: "Transit 2+", checked: false }
      ];
    
      const [transitVisible, setTransitVisible] = useState(false);
      const [transitOptionsState, setTransitOptionsState] = useState(transitOptions);
    
      const handleTransitClick = () => {
        setTransitVisible(!transitVisible);
      }
    
      const handleTransitOptionClick = (index) => {
        const updatedTransitOptions = transitOptionsState.map((option, i) => {
          if (i === index) {
            return { ...option, checked: true };
          }
          return { ...option, checked: false };
        });
        setTransitOptionsState(updatedTransitOptions);
      }


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


      const AirlinesOptions = [
        { label: "Garuda Indonesia", checked: false },
        { label: "Air Asia", checked: false },
        { label: "Lion Air", checked: false }
      ];
    
      const [AirlinesVisible, setAirlinesVisible] = useState(false);
      const [AirlinesOptionsState, setAirlinesOptionsState] = useState(AirlinesOptions);
    
      const handleAirlinesClick = () => {
        setAirlinesVisible(!AirlinesVisible);
      }
    
      const handleAirlinesOptionClick = (index) => {
        const updatedAirlinesOptions = AirlinesOptionsState.map((option, i) => {
          if (i === index) {
            return { ...option, checked: true };
          }
          return { ...option, checked: false };
        });
        setAirlinesOptionsState(updatedAirlinesOptions);
      }

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


      const ticket = [
        {
            id: 1,
            photo: garuda,
            name: 'Garuda Indonesia',
            departure: 'IDN',
            arrival: 'JPN',
            departure_time: '12.33',
            arrival_time: '15.21',
            transit: 0,
            Facilities: ['Luggage', 'In-flight Meal', 'Wifi'],
            Price: '214,00'
        },
        {
            id: 1,
            photo: asia,
            name: 'Air Asia',
            departure: 'IDN',
            arrival: 'JPN',
            departure_time: '12.02',
            arrival_time: '15.21',
            transit: 1,
            Facilities: ['Luggage', 'In-flight Meal', ],
            Price: '180,00'
        },
        {
            id: 1,
            photo: lion,
            name: 'Lion Air',
            departure: 'IDN',
            arrival: 'JPN',
            departure_time: '12.33',
            arrival_time: '19.44',
            transit: 2,
            Facilities: ['Luggage', 'Wifi'],
            Price: '300,00'
        },
      ]

  return (
    <>

        <div className='flex ml-10 justify-evenly items-center mt-5'>
                <div className="flex">
                    <Image src={ankasa} height={50} width={50} style={{transform: 'rotate(10deg)', objectFit:'contain'}} alt='ankasa'/>
                    <h3 className="ml-4 text-3xl font-bold tracking-wide" style={{color:'#414141'}}>Ankasa</h3>
                </div>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom:2}}>
                    <Search sx={{ color: 'action.active', mr: 2, my: 0.5 }} />
                    <TextField className='w-96' id="input-with-sx" label="Search destination" variant="standard" />
                </Box>
                <div className='flex space-x-10 font-semibold text-lg'>
                    <h3>Find Ticket</h3>
                    <h3>My Booking</h3>
                </div>
                <div className='space-x-10 text-lg flex'>
                    <MailOutlineIcon/>
                    <NotificationsNoneIcon />
                    <PersonIcon/>
                </div>
        </div>
       
        <div className='mt-10 p-10 flex' style={{backgroundColor:'#F5F6FA'}}>
            <div className='w-1/6 ml-40'>
                <div className='flex justify-between'>
                    <h3 className='text-2xl font-semibold'>Filter</h3>
                    <h3 className='text-md font-semibold text-blue-700 mt-1'>Reset</h3>
                </div>
                <div className=' mt-5 shadow-md bg-white p-8 rounded-lg'>
                    <div className='border-b-2'>
                        <div className='flex justify-between'>
                            <div className='font-semibold text-lg'>Transit</div>
                            <div onClick={handleTransitClick}>
                                {transitVisible ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                            </div>
                        </div>
                        {transitVisible && (
                        <div className='flex flex-col mt-3'>
                            {transitOptionsState.map((option, index) => (
                            <FormControlLabel
                                key={index}
                                label={option.label}
                                control={
                                <Checkbox
                                    checked={option.checked}
                                    onClick={() => handleTransitOptionClick(index)}/>}
                                labelPlacement="start"
                                className="flex row-reverse justify-between text-start ml-2"/>))}
                        </div>
                        )}
                    </div>
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
                                        className="flex row-reverse justify-between text-start ml-2"/>))}
                                </div>
                                )}
                       
                    </div>
                    <div className='border-b-2 mt-5'>
                        <div className='flex justify-between'>
                            <div className='font-semibold text-lg'>Airlines</div>
                            <div onClick={handleAirlinesClick}>
                                {AirlinesVisible ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                            </div>
                        </div>
                            {AirlinesVisible && (
                                <div className='flex flex-col mt-3'>
                                    {AirlinesOptionsState.map((option, index) => (
                                    <FormControlLabel
                                        key={index}
                                        label={option.label}
                                        control={
                                        <Checkbox
                                            checked={option.checked}
                                            onClick={() => handleAirlinesOptionClick(index)}/>}
                                        labelPlacement="start"
                                        className="flex row-reverse justify-between text-start ml-2"/>))}
                                </div>
                                )}
                       
                    </div>

                    <div className='mt-5'>
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
                                max={maxmax}
                            />
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
                </div>
            </div>



            <div className='w-4/6 mx-20 h-screen'>
                    <div className='flex justify-between'>
                    <div className='flex items-center'>
                        <h3 className='text-2xl font-semibold'>Select Ticket</h3>
                        <h3 className='text-md ml-3 text-zinc-400 opacity-80 tracking-wide'>( {ticket.length} flight found )</h3>
                    </div>
                    <h3 className='text-md font-semibold text-blue-700 mt-1'>Sort by</h3>
                </div>

            {ticket.map((item, index) => { 
                    const depHours = parseInt(item.departure_time.split('.')[0]);
                    const depMinutes = parseInt(item.departure_time.split('.')[1]);
                    const arrHours = parseInt(item.arrival_time.split('.')[0]);
                    const arrMinutes = parseInt(item.arrival_time.split('.')[1]);
                    
                    let hours = arrHours - depHours;
                    let minutes = arrMinutes - depMinutes;
                    
                    if (minutes < 0) {
                        hours--;
                        minutes += 60;
                    }
                    
                    const duration = `${hours} Hour ${minutes} Minutes`;
                
                return(
                <div className='bg-white shadow-sm p-2 mt-7 rounded-lg' key={index}>
                    <div className='flex items-center ml-7 mt-2'>
                        <Image src={item.photo} alt='lion' className='w-24 h-10' style={{objectFit:'contain'}}/>
                        <h3 className='ml-5 tracking-wide text-lg font-medium' style={{color:'#595959'}}>{item.name}</h3>
                    </div>
                    <div className='flex justify-between mx-7 mt-7 items-center'>
                        <div className='flex space-x-10'>
                            <div className='text-center'>
                                <h3 className='font-semibold text-3xl'>{item.departure}</h3>
                                <p className='tracking-wide text-sm' style={{color:'#595959'}}>{item.departure_time}</p>
                            </div>
                            <div className='items-center justify-center mt-3'>
                            <Image src={plane} alt='plane' className='w-5 h-5 items-center'/>
                            </div>
                            <div className='text-center'>
                                <h3 className='font-semibold text-3xl'>{item.arrival}</h3>
                                <p className='tracking-wide text-sm' style={{color:'#595959'}}>{item.arrival_time}</p>
                            </div>
                        </div>
                        <div className='text-center'>
                            <p className='font-semibold' style={{color:'#595959'}}>{duration}</p>
                            <p className='tracking-wide text-sm' style={{color:'#595959'}}>
                                {item.transit !== undefined && typeof(item.transit) === 'number' ?
                                    (item.transit === 0 ? '( Direct )' : item.transit === 1 ? '( 1 Transit )' : '( Transit 2+ )') : ''}
                            </p>
                        </div>
                        {item.Facilities && 
                            <div className='space-x-3' style={{color:'#595959'}}>
                                {item.Facilities.map((facility) => {
                                if (facility === 'Luggage') {
                                    return <LuggageIcon />;
                                } else if (facility === 'In-flight Meal') {
                                    return <LunchDiningIcon />;
                                } else if (facility === 'Wifi') {
                                    return <WifiIcon />;
                                }
                                return null;
                                })}
                            </div>
                            }
                        <div>
                            <p> <span className='text-blue-500'>${item.Price}</span>/pax</p>
                        </div>
                        <div>
                            <Button variant='contained' className='font-semibold rounded-lg tracking-wide' style={{backgroundColor:'#2395FF'}}>Select</Button>
                        </div>
                    </div>
                    <div className='flex flex items-center mt-5 ml-7 pb-2 text-blue-500 font-semibold'>
                        <h3>View Details</h3>
                        <ArrowDropDownIcon />
                    </div>
                </div>
            
                    )})}
            </div>
           
        </div>
        
        <div>
        <div className='flex justify-around py-10'>
            <div className='flex flex-col ml-40'>
                <div className='flex items-center'>
                    <Image src={ankasa} alt='ankasa' className='w-20 h-10' style={{objectFit:'contain'}}/>
                    <h3 className='text-3xl font-bold text' style={{color:'#414141'}}>Ankasa</h3>
                </div>
                <h3 className='mt-10 w-3/5'>Find your Flight and explore the world with us. We will take care of the rest</h3>
            </div>

            <div className='flex flex-col'>
                <h3 className='text-xl font-semibold text' style={{color:'#414141'}}>Features</h3>
                <div className='space-y-2 mt-5' style={{color:'#414141'}}>
                    <p>Find Ticket</p>
                    <p>My Booking</p>
                    <p>Chat</p>
                    <p>Notification</p>
                </div>
            </div>

            <div className='flex flex-col items-center'>
                <h3 className='text-xl font-semibold text' style={{color:'#414141'}}>Download Ankasa App</h3>
                <div className='mt-5'>
                    <Image className='w-40 h-15' style={{objectFit:'contain'}} src={apple} alt='apple'/>
                    <Image className='w-40 h-16 mt-2' style={{objectFit:'contain'}} src={google} alt='google'/>
                </div>
            </div>

            <div className='flex flex-col me-40'>
                <h3 className='text-xl font-semibold text' style={{color:'#414141'}}>Follow Us</h3>
                <div className='flex mt-5 space-x-2'>
                    <FacebookIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                    <YouTubeIcon />
                </div>
            </div>
        </div>
        <div className='flex justify-between mx-60 pb-5'>
            <div className='flex space-x-2'>
                <CopyrightIcon />
                <h3>Ankasa. All Rights Reserved</h3>
            </div>
            <div className='flex'>
                <PlaceIcon />
                <h3>Jakarta, Indonesia</h3>
            </div>
        </div>
        </div>
        
    </>
  )
}

export default Main