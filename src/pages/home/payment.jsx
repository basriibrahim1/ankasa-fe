import { UserNavbar } from '@/component/navbar'
import React from 'react'
import paypal from '../../assets/pp.jpg'
import mc from '../../assets/mc.png'
import visa from '../../assets/visa.jpg'
import stripe from '../../assets/stripe.png'
import ae from '../../assets/ae.png'
import Image from 'next/image'
import { usePaymentInputs, PaymentInputsWrapper } from 'react-payment-inputs'
import images from 'react-payment-inputs/images'
import LockIcon from '@mui/icons-material/Lock';
import { Button } from '@mui/material'
import Footer from '@/component/footer'

const Payment = () => {

    const {
        wrapperProps,
        getCardImageProps,
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps
      } = usePaymentInputs();


  return (
    <>
        <UserNavbar />


        <div className='p-40 mt-10 items-center justify-center' style={{backgroundColor:'#2395FF', height:'80vh'}}>
            <div className='w-full flex p-20' style={{backgroundColor:'white'}}>
                <div className='w-3/6 '>
                    <h3 className='font-semibold text-xl'>Payment Method</h3>
                    <div className='bg-zinc-100 py-3 px-4 space-y-3 mt-5 font-medium text-sm'>
                        <div className='flex justify-between items-center'>
                            <h3>Paypal</h3>
                            <Image src={paypal} className='w-5 h-5'style={{objectFit:'contain'}}/>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h3>Credit Card</h3>
                            <div className='flex'>
                                <Image src={mc} className='w-10 h-8'style={{objectFit:'contain'}}/>
                                <Image src={visa} className='w-10 h-8'style={{objectFit:'contain'}}/>
                                <Image src={stripe} className='w-10 h-8'style={{objectFit:'contain'}}/>
                                <Image src={ae} className='w-10 h-8'style={{objectFit:'contain'}}/>
                            </div>
                        </div>
                    </div> 

                    <div className='mt-5 ml-1'>
                        <PaymentInputsWrapper {...wrapperProps}>
                        <svg {...getCardImageProps({ images })} />
                        <input {...getCardNumberProps()} />
                        <input {...getExpiryDateProps()} />
                        <input {...getCVCProps()} />
                        </PaymentInputsWrapper>
                    </div>

                    <div className='flex text-xs items-center mt-5' style={{color:'#6B6B6B'}}>
                        <LockIcon className='text-xs'/>
                        <h3 className='font-medium' >Your transaction is secured with ssl certificate</h3>
                    </div>

                </div>
                <div className='w-3/6  mx-20'>
                    <h3 className='font-semibold text-xl'>Summary</h3>
                    <div className='space-y-5'>
                        <div className='flex justify-between mt-5 font-medium text-sm border-b-2 pb-3'>
                            <div className=''>
                                <h3>Pro(Billed Monthly)</h3>
                                <p className='text-xs text-blue-500 underline'>Save 20% with annual billing</p>
                            </div>
                            <h3>$9.99 <span>/month</span></h3>
                        </div>
                        <div className='mt-5 font-medium text-sm border-b-2 pb-3 space-y-5'>
                            <div className='flex justify-between items-center'>
                                <h3>Refferal Bonuses</h3>
                                <h3>-$2.00</h3>
                            </div>
                            <div className='flex justify-between items-center'>
                                <h3>Vat</h3>
                                <h3>-20%</h3>
                            </div>
                        </div>
                        <div className='flex justify-between mt-5 font-medium text-md border-b-2 pb-3'>
                            <div className=''>
                                <h3>Total Payment (USD)</h3>
                                <p className='text-xs'>After 30 days $9.59</p>
                            </div>
                            <h3>$0</h3>
                        </div>
                        <Button color='info' className='px-10 py-3 font-semibold w-full' variant='contained' style={{ textTransform: "none", backgroundColor:'#2395FF'}}>Try it free for 30 Days</Button>
                    </div>
                </div>
            </div>
        </div>
    <Footer/>
    </>
  )
}

export default Payment