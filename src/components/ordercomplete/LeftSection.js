import React from 'react'
import BillingDetails from './BillingDetails'

const LeftSection = () => {
  return (
    <div>

        <h1 className='text-4xl font-bold'>Thank you for your purchase</h1>
        <p className='my-4'>Your order will be processed within 24 hours during working days. We will notify you by email once your order has been shipped.</p>

        <BillingDetails />
    </div>
  )
}

export default LeftSection