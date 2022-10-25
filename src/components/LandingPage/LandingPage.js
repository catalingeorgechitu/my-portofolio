import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function LandingPage({ handleClickScroll }) {
	return (
		<div className='text-center max-w-3xl mx-auto'>
			<h3 className='text-2xl font-bold'>Design. Build. Improve.</h3>
			<h1 className='text-6xl mt-5 font-bold'>
				I create beautiful websites your clients will love
			</h1>
			<button
				onClick={() => handleClickScroll('contact')}
				className='dark:bg-[#3b3a51] px-12 py-3 bg-green-300 rounded-lg my-10 font-bold outline-none hover:-translate-y-1 duration-200'
			>
				Contact me
			</button>
			<button onClick={() => handleClickScroll('slider')}>
				<FontAwesomeIcon
					className='w-8 h-8 absolute bottom-5 mx-auto right-0 left-0 animate-bounce'
					icon={faArrowDown}
				/>
			</button>
		</div>
	);
}
