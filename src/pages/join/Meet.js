import React,{useState} from 'react'
import { Link } from 'react-router-dom'


const Meet = () => {
  const [name,setname]=useState(' ');
  const [room,setroom]=useState(' ');
  
//   console.log(name);
//   console.log(room);
  return (
    <div className='flex justify-center text-center h-screen items-center  bg-slate-300'>
        <div className='w-1/4'>
            <h2 className='text-orange-600	text-3xl	border-b-2 border-solid   border-black py-2	'> Meet</h2>
        <div>
            <input placeholder='Enter your name' className=' border-2 border-solid border-black mt-3 	  px-3 py-1 w-full ' type='text' onChange={(e)=>setname(e.target.value)}/>

        </div>
        <div>
            <input placeholder='Enter your room' className='border-2 border-solid border-black mt-3 	  px-3 py-1 w-full' type='text' onChange={(e)=>setroom(e.target.value)}/>

        </div>
        {/* onClick={(e)=>(!name || !room) ?e.preventDefault():null} */}
        

        <Link onClick={(e)=>(!name || !room) ?e.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
            
        <button className='text-blue-500 uppercase bg-red-100	 border-2 border-solid  border-white mt-3 w-full rounded-md p-1' type='submit'>
                Meet up
            </button>
        </Link>

        </div>
        </div>
  )
}

export default Meet