import React, { useState } from 'react';

import Calendar from '../Components/Student/Calendar';
import RecommendedEvents from '../Components/Student/RecommendedEvents';
import ContextWrapper from '../Context/ContextWrapper';

// Add bigger fonts to button group

export default function Student2({id,recommandations, incommingActivities})
{
	const [isCalendar, setIsCalendar] = useState(false); // Display calendar by default upon load
	console.log(id, recommandations);
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
				{isCalendar ? <Calendar incommingActivities = {incommingActivities} /> : <RecommendedEvents id = {id} recommandations = {recommandations} />}
			</ContextWrapper>
		</React.Fragment>
	)
}