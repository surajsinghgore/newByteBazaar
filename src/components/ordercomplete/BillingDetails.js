import React from 'react'

const BillingDetails = () => {
  return (
    <div>
        <h3 className='text-2xl'>Billing address</h3>
        <div class="details">
            <div class="flex items-center gap-2 my-2">
                <div class="font-semibold w-[15%]">Name</div>
                <div class="title">Suraj singh</div>
            </div>
            <div class="flex items-center gap-2 my-2">
                <div class="font-semibold w-[15%]">Address</div>
                <div class="title">chandigarh </div>
            </div>
            <div class="flex items-center gap-2 my-2">
                <div class="font-semibold w-[15%]">Phone</div>
                <div class="title">+91 7686908756</div>
            </div>
            <div class="flex items-center gap-2 my-2">
                <div class="font-semibold w-[15%]">Email</div>
                <div class="title">surajsinghtest@gmail.com</div>
            </div>
        </div>
    </div>
  )
}

export default BillingDetails