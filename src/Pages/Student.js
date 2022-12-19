import React, { useState, useEffect } from 'react';

import Calendar from '../Components/Student/Calendar';
import RecommendedEvents from '../Components/Student/RecommendedEvents';
import ContextWrapper from '../Context/ContextWrapper';
import APIService from '../Services/APIService';
import StorageService from '../Services/StorageService';
import UserService from '../Services/UserService';

// Add bigger fonts to button group

export default function Student()
{
	const [isCalendar, setIsCalendar] = useState(true); // Display calendar by default upon load
	const [recommendations, setRecommendations] = useState([]);
	const [incomingActivities, setIncomingActivities] = useState([]);

	useEffect(() =>
	{
		APIService.getRecommendations();
		APIService.getIncomingActivities();
	}, []);

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
				{isCalendar ? <Calendar /> : <RecommendedEvents />}
			</ContextWrapper>
		</React.Fragment>
	)
}