import { useState } from 'react';
import {
	faBed,
	faCalendarDays,
	faCar,
	faHouse,
	faPerson,
	faPlane,
	faTaxi,
} from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css';

const Header = () => {
	const [openDate, setOpenDate] = useState(false);
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection',
		},
	]);
	const [openOptions, setOpenOptions] = useState(false);
	const [options, setOptions] = useState({
		adult: 1,
		children: 0,
		room: 1,
	});
	return (
		<div className='header'>
			<div className='headerContainer'>
				<div className='headerList'>
					<div className='headerListItem active'>
						<FontAwesomeIcon icon={faBed} />
						<span>Stays</span>
					</div>
					<div className='headerListItem'>
						<FontAwesomeIcon icon={faPlane} />
						<span>Flights</span>
					</div>
					<div className='headerListItem'>
						<FontAwesomeIcon icon={faCar} />
						<span>Car Rentals</span>
					</div>
					<div className='headerListItem'>
						<FontAwesomeIcon icon={faHouse} />
						<span>Attractions</span>
					</div>
					<div className='headerListItem'>
						<FontAwesomeIcon icon={faTaxi} />
						<span>Airport Taxis</span>
					</div>
				</div>
				<h1 className='headerTitle'>
					Enjoy the freedom of an extended stay with Bookie.
				</h1>
				<p className='headerDesc'>
					Bookie's loyalty program is simple. The more you book with us, the
					more travel rewards you'll get. Sign in or create an account to get
					started.
				</p>
				<button className='headerBtn'>Sign In / Register</button>
				<div className='headerSearch'>
					<div className='headerSearchItem'>
						<FontAwesomeIcon
							icon={faBed}
							className='headerIcon'
						/>
						<input
							type='text'
							className='headerSearchInput'
							placeholder='Where are you going?'></input>
					</div>
					<div className='headerSearchItem'>
						<FontAwesomeIcon
							icon={faCalendarDays}
							className='headerIcon'
						/>
						<span
							onClick={() => setOpenDate(!openDate)}
							className='headerSearchText'>{`${format(
							date[0].startDate,
							'MM/dd/yyyy',
						)} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
						{openDate && (
							<DateRange
								editableDateInputs={true}
								onChange={(item) => setDate([item.selection])}
								moveRangeOnFirstSelection={false}
								ranges={date}
								className='date'
							/>
						)}
					</div>
					<div className='headerSearchItem'>
						<FontAwesomeIcon
							icon={faPerson}
							className='headerIcon'
						/>
						<span className='headerSearchText'>{`${options.adult} adult : ${options.children} children : ${options.room} room`}</span>
					</div>
					<div className='headerSearchItem'>
						<button className='headerBtn'>Search</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
