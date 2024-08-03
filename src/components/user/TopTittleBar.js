import React from 'react'

const TopTittleBar = () => {
  return (
      <div className="border-b py-4 flex justify-between">
    <h1 className="text-xl font-bold text-center">My Account</h1>
    <h1 className="text-md font-medium text-center cursor-pointer">Logout</h1>

  </div>
  )
}

export default TopTittleBar