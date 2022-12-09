import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

import userLogo from '../Assets/Icons/user.svg';

export default function Topbar() 
{
	const [username, setUserName] = useState('Username');

	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="/">Logo</Navbar.Brand>
				<Nav>
					<Nav.Link href='/user'>
						<img src={userLogo} alt='user.svg'></img>
					</Nav.Link>
				</Nav>

			</Container>
		</Navbar>
	);
}
