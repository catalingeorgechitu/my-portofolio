import React from 'react';
import logo from '../../assets/img/logo.png';
import Darkmode from '../Darkmode/Darkmode';

export default function ({ handleClickScroll }) {
	return (
		<nav className='flex justify-between items-center pt-10'>
			<div>
				<img
					className='w-12 h-12 bg-white p-0 rounded-full'
					src={logo}
					alt=''
				/>
			</div>
			<ul className='flex gap-x-3 font-bold'>
				<li
					className='hover:cursor-pointer hover:bg-[#3b3a51] px-3 py-2 rounded-lg duration-200'
					onClick={() => handleClickScroll('about')}
				>
					about
				</li>
				<li className='hover:cursor-pointer hover:bg-[#3b3a51] px-3 py-2 rounded-lg duration-200'>
					portofolio
				</li>
				<li className='hover:cursor-pointer hover:bg-[#3b3a51] px-3 py-2 rounded-lg duration-200'>
					cv
				</li>
				<li className='hover:cursor-pointer hover:bg-[#3b3a51] px-3 py-2 rounded-lg duration-200'>
					contact
				</li>
				<li className='hover:cursor-pointer hover:bg-[#3b3a51] px-3 py-2 rounded-lg duration-200'>
					github
				</li>
				<li className='hover:cursor-pointer px-3 py-2 rounded-lg'>
					<Darkmode />
				</li>
			</ul>
		</nav>
	);
}
