import React, { useState, useContext } from 'react'
import dayjs from 'dayjs';
import GlobalContext from '../Context/GlobalContext'

export default function ActivityModel()
{
    const [activityTitle, setActivityTitle] = useState('')
    const [activityLocation, setActivityLocation] = useState('')
    const { setShowActivityModel } = useContext(GlobalContext)

    return (
        <div className='h-screen w-full fixed left-0 top-0 flex justify-center items-center'>
            <form className='bg-white rounded-lg shadow-2xl w-1/4'>
                <header className='bg-gray-100 px-4 py-2 flex justify-between items-center'>
                    <span className='material-icons-outlined text-gray-400'>
                        drag_handle
                    </span>
                    <button onClick={() => setShowActivityModel(false)}>
                        <span className='material-icons-outlined text-gray-400'>
                            close
                        </span>
                    </button>
                </header>
                <div className='p-3'>
                    <div className='grid grid-cols-1/5'>
                        <div className=''>Title</div>
                        <input
                            type="text"
                            name='title'
                            placeholder='Add a title'
                            value={activityTitle}

                            className='pt-3 border-0 border-b-2 border-gray-200 text-gray-600 text-xl font-semibold pb-2 w-full focus:outline-none focus:ring-0 focus:border-black'
                            onChange={(e) => setActivityTitle(e.target.value)} />
                        <div className='pr-2 text-xl'>Location</div>
                        <input
                            type="text"
                            name='location'
                            placeholder='Add a location'
                            value={activityLocation}

                            className='pt-3 border-0 border-b-2 border-gray-200 text-gray-600 text-xl font-semibold pb-2 w-full focus:outline-none focus:ring-0 focus:border-black'
                            onChange={(e) => setActivityLocation(e.target.value)} />
                    </div>
                    <div>Date</div>
                    <div>Start Time</div>
                    <div>End Time</div>
                    <div>Tags</div>
                    <div>URL</div>
                    <div>Description</div>
                </div>

            </form>
        </div>
    )
}
