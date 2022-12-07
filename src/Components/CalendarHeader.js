import React, { useContext } from 'react';
import dayjs from 'dayjs';
import GlobalContext from '../Context/GlobalContext'

export default function CalendarHeader({ month }, { currentYear })
{
  const { monthIndex, setMonthIndex } = useContext(GlobalContext)

  function handlePrevMonth()
  {
    setMonthIndex(monthIndex - 1)
  }

  function handleNextMonth()
  {
    setMonthIndex(monthIndex + 1)
  }

  return (
    <header className='px-2 py-2 place-items-center'>
      <div className='flex'>
        <button onClick={handlePrevMonth}>
          <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
            chevron_left
          </span>
        </button>
        <h1 className='font-bold'>
          {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
        </h1>
        <button onClick={handleNextMonth}>
          <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
            chevron_right
          </span>
        </button>
      </div>

    </header>
  )
}
