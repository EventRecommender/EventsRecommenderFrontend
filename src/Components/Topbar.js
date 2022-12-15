import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

import userLogo from '../Assets/Icons/user.svg';

export default function Topbar({name}) 
{
	const [username, setUserName] = useState(name);

	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="/">Logo</Navbar.Brand>
				<Nav>
					<Nav.Link 
						href='/user'
						className='flex'>
						<h1>{name}</h1>
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
}
