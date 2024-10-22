import React, { useEffect, useState } from 'react'

import { useLoaderData } from 'react-router-dom'

const Github = () => {
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //      fetch('https://api.github.com/users/hiteshchoudhary').then(response => response.json()).then(data=>{
    //         console.log(data);
    //         setData(data)
            
    //      })
    // },[])

    const data = useLoaderData();                   //useloaderdata hooks
  return (
    <div className='text-center m-4 bg-gray-600 text-white text-3xl'>Github followers: {data.followers}
    
    <img className=' text-center' src={data.avatar_url}></img>
    
    </div>
  )
}

export default Github

export const githubInfoLoader =async ()=>{
 const response= await fetch('https://api.github.com/users/hiteshchoudhary');
 return response.json()
}