import React, { useState } from 'react';
import Calendar from '../Components/Calendar';
import PageToggleBar from '../Components/PageToggleBar';
import RecommendedEvents from '../Components/RecommendedEvents';
import Topbar from '../Components/Topbar';
import ContextWrapper from '../Context/ContextWrapper';

export default function Student2()
{
	const [isCalendar, setIsCalendar] = useState("true"); // Display calendar by default upon load

	return (
		<React.Fragment>
			<Topbar />
			<ContextWrapper>
				<PageToggleBar />
				{isCalendar ?
					<Calendar /> : <RecommendedEvents />}
			</ContextWrapper>
		</React.Fragment>
	);
}
