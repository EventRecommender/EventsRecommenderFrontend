import React from 'react'
import { useContext } from 'react'
import GlobalContext from '../Context/GlobalContext'

export default function CreateEventButton() 
{
   const {setShowActivityModel} = useContext(GlobalContext);
  
   return (
    <button onClick={() => setShowActivityModel(true)} className='border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl'>
      <span className='pl-3 pr-7'>Create</span>
    </button>
  )
}
