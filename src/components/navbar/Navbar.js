import './navbar.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.js';

const Navbar = ( { type } ) => {
	const { user } = useContext( AuthContext );
	return (
		<>
			<div className={type === 'list' ? 'navbar listMode' : 'navbar'}>
				<div
					className={
						type === 'list' ? 'navContainer listMode' : 'navContainer'
					}>
					<Link
						to='/'
						style={{ color: 'inherit', textDecoration: 'none' }}>
						<span className='logo'>Bookie</span>
					</Link>
					{user ? user.username : <div className='navItems'>
						<button className='navButton'>Register</button>
						<button className='navButton'>Log In</button>
					</div>}
				</div>
			</div>
		</>
	);
};

export default Navbar;
