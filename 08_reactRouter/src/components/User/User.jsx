import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const {userid} =useParams()  //useparams give access to use userid because userid is  define it
  return (

    <div className='bg-gray-500 text-3xl'>User:{userid}</div>
  )
}

export default User