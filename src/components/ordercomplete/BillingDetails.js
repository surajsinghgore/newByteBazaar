import React from 'react'

const BillingDetails = () => {
  return (
    <div>
        <h3 className='text-2xl'>Billing address</h3>
        <div className="details">
            <div className="flex items-center gap-2 my-2">
                <div className="font-semibold w-[15%]">Name</div>
                <div className="title">Suraj singh</div>
            </div>
            <div className="flex items-center gap-2 my-2">
                <div className="font-semibold w-[15%]">Address</div>
                <div className="title">chandigarh </div>
            </div>
            <div className="flex items-center gap-2 my-2">
                <div className="font-semibold w-[15%]">Phone</div>
                <div className="title">+91 7686908756</div>
            </div>
            <div className="flex items-center gap-2 my-2">
                <div className="font-semibold w-[15%]">Email</div>
                <div className="title">surajsinghtest@gmail.com</div>
            </div>
        </div>
    </div>
  )
}

export default BillingDetails