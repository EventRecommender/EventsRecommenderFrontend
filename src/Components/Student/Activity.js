import React from 'react'

export default function Activity({ img, title, location, host, date, type, url })
{
  return (
    <div className='border rounded'>
      <button className='pb-2 items-center text-left'>
        <img src={img} alt='image' className='border relative mx-auto rounded-t overflow-hidden' />
        <header className='pl-2 pr-2 font-bold'>{date != null ? date : "No date"}</header>
        <header className='pl-2 pr-2 font-bold'>{title != null ? title : "No title"}</header>
        <header className='pl-2 pr-2 pb-5 font-bold'>{location != null ? location : "No location"}</header>
      </button>
      <button className='flex' onClick={() => console.log("You clicked interested")}>Interested</button>
    </div>
  )
}