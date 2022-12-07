import React, { useState } from 'react';
import Calendar from '../Components/Calendar';
import PageToggleBar from '../Components/PageToggleBar';
import RecommendedEvents from '../Components/RecommendedEvents';
import Topbar from '../Components/Topbar';
import ContextWrapper from '../Context/ContextWrapper';
import StudentContext from '../Context/StudentContext';

export default function Student2() {
	const [isCalendar, setIsCalendar] = useState("true"); // Display calendar by default upon load

	return (
		<React.Fragment>
			<Topbar />
			<PageToggleBar />
         {isCalendar ? 
         <ContextWrapper>
         <Calendar />
      </ContextWrapper> :
      <RecommendedEvents/>}
		</React.Fragment>
	);
}
