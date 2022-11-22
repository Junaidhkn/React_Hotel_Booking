import './navbar.css';
import { Link } from 'react-router-dom';

const navbar = ({ type }) => {
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
					<div className='navItems'>
						<button className='navButton'>Register</button>
						<button className='navButton'>Log In</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default navbar;
