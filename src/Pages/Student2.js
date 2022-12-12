import React, { useEffect, useState } from 'react';

import Calendar from '../Components/Calendar';
import RecommendedEvents from '../Components/RecommendedEvents';
import Topbar from '../Components/Topbar';
import ContextWrapper from '../Context/ContextWrapper';

export default function Student2({id})
{
	const [isCalendar, setIsCalendar] = useState(true); // Display calendar by default upon load

	return (
		<React.Fragment>
			<div data-testid="ButtonGroupS" className='flex items-center'>
				<button onClick={() => setIsCalendar(false)} className='border flex-1 hover:bg-gray-200 focus:outline-none'>
					<header>Recommended Events</header>
				</button>
				<button onClick={() => setIsCalendar(true)} className='border flex-1 hover:bg-gray-200 focus:outline-none'>
					<header>Calendar</header>
				</button>
			</div>
			<ContextWrapper>
				{isCalendar ? <Calendar /> : <RecommendedEvents id = {id} />}
			</ContextWrapper>
		</React.Fragment>
	)
}
