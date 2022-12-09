import React, { useState } from 'react'

export default function Activity({img, title, place, host, date, type, url})
{
    return (
        <div className='border rounded'>
          <button className='pb-2 items-center text-left'>
            <img src={img} alt='image' className='border relative mx-auto rounded-lg overflow-hidden'/>
            <header className='pl-2 pr-2 font-bold'>{date != null ? date : "No date"}</header>
            <header className='pl-2 pr-2 font-bold'>{title != null ? title : "No title"}</header>
            <header className='pl-2 pr-2 pb-5 font-bold'>{place != null ? place : "No location"}</header>
          </button>
          <button className='flex'>Interested</button>
        </div>
    )
}
